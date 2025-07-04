"use server";

import { createClient } from "@/data/supabase/server";
import { getFutureDate } from "@/utilities/formatDate";
import formatNumber from "@/utilities/formatNumber";
import { getDebitCardNumber, getID } from "@/utilities/getID";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface ErrorType {
  [key: string]: string;
}

const errors: ErrorType = {};

function isValidInput(key: string, value: string) {
  if (!value || !value.trim()) {
    errors[key] = "Must be filled in";
    return false;
  } else {
    errors[key] = "";
    return true;
  }
}

export async function debitCardAction(_: unknown, formData: FormData) {
  const supabase = await createClient();

  const deliveryCountry = formData.get("deliveryCountry") as string;
  const deliveryStreet = formData.get("deliveryStreet") as string;
  const deliveryCity = formData.get("deliveryCity") as string;
  const deliveryPostcode = formData.get("deliveryPostcode") as string;

  const cardType = formData.get("cardType") as string;
  const cardPrice = formData.get("cardPrice") as string;

  const isCountryValid = isValidInput("country", deliveryCountry);
  const isStreetValid = isValidInput("street", deliveryStreet);
  const isCityValid = isValidInput("city", deliveryCity);
  const isPostcodeValid = isValidInput("postalCode", deliveryPostcode);

  if (!isCountryValid || !isStreetValid || !isCityValid || !isPostcodeValid)
    return errors;

  const { data } = await supabase.auth.getUser();

  const { data: usersBalance } = await supabase
    .from("users_balance")
    .select("*");

  const currentUserBalance = usersBalance?.find(
    (item) => item.user_id === data.user?.id,
  ).personalAccountBalance;

  await supabase
    .from("users_balance")
    .update({
      personalAccountBalance: currentUserBalance - Number(cardPrice),
    })
    .eq("user_id", data.user?.id)
    .select();

  const { data: allTransactions } = await supabase
    .from("transactions_personal")
    .select("*");

  const currentUserTransactions = allTransactions?.find(
    (item) => item.user_id === data.user?.id,
  ).transactions;

  const newTransactionData = {
    id: getID(),
    transactionDate: getFutureDate(0),
    recipientFullName: `${cardType[0].toUpperCase() + cardType.slice(1).toLowerCase()} Debit Card Purchased`,
    amount: `${formatNumber(cardPrice)}€`,
    paymentMethod: "Bank Account",
    actionType: "withdrawn",
    isScheduled: false,
  };

  await supabase
    .from("transactions_personal")
    .update({ transactions: [newTransactionData, ...currentUserTransactions] })
    .eq("user_id", data.user?.id)
    .select();

  const cardDetails = {
    cardHolder:
      `${data.user?.user_metadata.firstName} ${data.user?.user_metadata.lastName}` ||
      "Card Holder",
    cardNumber: getDebitCardNumber(),
    cvv: Math.floor(Math.random() * 900 + 100),
    expiryDate: "07/30", // Example expiry date
    cardType: cardType,
    price: Number(cardPrice),
    isActive: true,
  };

  const { error } = await supabase
    .from("debit_cards")
    .update(cardDetails)
    .eq("user_id", data.user?.id)
    .select();

  if (error) throw new Error(error?.message);

  revalidatePath("/", "layout");
  redirect("/cards");
}

export async function closeDebitCard() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  const cardDetails = {
    cardHolder: null,
    cardNumber: null,
    cvv: null,
    expiryDate: null,
    cardType: "",
    price: 0,
    isActive: false,
  };

  const { error } = await supabase
    .from("debit_cards")
    .update(cardDetails)
    .eq("user_id", data.user?.id)
    .select();

  if (error) throw new Error(error?.message);

  revalidatePath("/", "layout");
  redirect("/cards");
}

export async function handleDebitCardStatus() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  const { data: debitCards } = await supabase.from("debit_cards").select("*");

  const currentStatus = debitCards?.find(
    (item) => item.user_id === data.user?.id,
  ).isActive;

  const { error } = await supabase
    .from("debit_cards")
    .update({ isActive: !currentStatus })
    .eq("user_id", data.user?.id)
    .select();

  if (error) throw new Error(error?.message);

  revalidatePath("/", "layout");
}
