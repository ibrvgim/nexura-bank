"use server";

import { createClient } from "@/data/supabase/server";
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

  const { error } = await supabase
    .from("debit_cards")
    .update({ cardType: cardType, price: Number(cardPrice) })
    .eq("user_id", data.user?.id)
    .select();

  if (error) throw new Error(error?.message);

  revalidatePath("/", "layout");
  redirect("/cards");
}
