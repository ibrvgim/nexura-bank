"use server";

import { createClient } from "@/data/supabase/server";
import { getFutureDate } from "@/utilities/formatDate";
import { extractNumericAmount } from "@/utilities/formatString";
import { getID } from "@/utilities/getID";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import getCurrenciesRate from "../data/api/getCurrenciesRate";

export async function handleSendAddMoney(_: unknown, formData: FormData) {
  const supabase = await createClient();

  const actionType = formData.get("actionType");
  const amount = formData.get("amount") as string;
  const amountWithoutFees =
    (formData.get("amountWithoutFees") as string) || null;
  const currency = formData.get("currency") as string;
  const isWithdrawn = actionType === "withdrawn";
  let newTransactionData = {};

  if (isWithdrawn) {
    newTransactionData = {
      id: getID(),
      transactionDate: getFutureDate(0),
      recipientFullName: formData.get("recipientFullName"),
      recipientAccountNumber: formData.get("recipientAccountNumber"),
      amount: amount,
      paymentMethod: formData.get("paymentMethod"),
      arrivesBy: formData.get("arrivesBy"),
      actionType: formData.get("actionType"),
      isScheduled: formData.get("isScheduled") === "true",
    };
  } else if (!isWithdrawn) {
    newTransactionData = {
      id: getID(),
      transactionDate: getFutureDate(0),
      amount: amountWithoutFees || amount,
      paymentMethod: formData.get("paymentMethod"),
      arrivesBy: formData.get("arrivesBy"),
      actionType: formData.get("actionType"),
    };
  }

  const exchangeRate = await getCurrenciesRate(currency, "eur");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: usersBalance } = await supabase
    .from("users_balance")
    .select("*");

  const currentUserBalance = usersBalance?.find(
    (item) => item.user_id === user?.id,
  ).personalAccountBalance;

  await supabase
    .from("users_balance")
    .update({
      personalAccountBalance: isWithdrawn
        ? currentUserBalance -
          (extractNumericAmount(amountWithoutFees || amount) || 0) *
            exchangeRate
        : currentUserBalance +
          (extractNumericAmount(amountWithoutFees || amount) || 0) *
            exchangeRate,
    })
    .eq("user_id", user?.id)
    .select();

  const { data: allTransactions } = await supabase
    .from("transactions_personal")
    .select("*");

  const currentUserTransactions = allTransactions?.find(
    (item) => item.user_id === user?.id,
  ).transactions;

  const { error } = await supabase
    .from("transactions_personal")
    .update({ transactions: [newTransactionData, ...currentUserTransactions] })
    .eq("user_id", user?.id)
    .select();

  if (error)
    return error?.message || "Something is wrong. Please try later again.";

  revalidatePath("/", "layout");
  redirect("/home");
}
