"use server";

import { createClient } from "@/data/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface ErrorType {
  [key: string]: string;
}

const errors: ErrorType = {};

function checkStringValidity(
  value: string,
  key: string,
  minLength: number = 0,
) {
  if (!value.trim()) {
    errors[key] = "Must be filled in";
    return false;
  } else if (value.trim().length < minLength) {
    errors[key] = `Minimum ${minLength} characters`;
    return false;
  } else {
    return true;
  }
}

function checkUrlValidity(value: string | null, key: string) {
  if (!value?.trim()) return true;
  const isValid =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      value.trim(),
    );

  if (!isValid) {
    errors[key] = "Include valid link";
    return false;
  } else {
    return true;
  }
}

export async function createBusinessAccount(_: unknown, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const businessName = formData.get("businessName") as string;
  const businessCountry = formData.get("businessCountry") as string;
  const businessAddress = formData.get("businessAddress") as string;
  const businessCity = formData.get("businessCity") as string;
  const businessPostal = formData.get("businessPostal") as string;
  const businessSector = formData.get("businessSector") as string;
  const employeesNumber = formData.get("employeesNumber") as string;
  const businessWebsite = formData.get("businessWebsite") as string | null;

  const isBusinessName = checkStringValidity(businessName, "businessName", 5);
  const isBusinessCountry = checkStringValidity(
    businessCountry,
    "businessCountry",
  );
  const isBusinessAddress = checkStringValidity(
    businessAddress,
    "businessAddress",
    5,
  );
  const isBusinessCity = checkStringValidity(businessCity, "businessCity", 2);
  const isBuisnessPortal = checkStringValidity(
    businessPostal,
    "businessPostal",
    5,
  );
  const isBusinessSector = checkStringValidity(
    businessSector,
    "businessSector",
  );
  const isEmployeesNumber = checkStringValidity(
    employeesNumber,
    "employeesNumber",
  );
  const isUrl = checkUrlValidity(businessWebsite, "businessWebsite");

  if (
    !isBusinessName ||
    !isBusinessCountry ||
    !isBusinessAddress ||
    !isBusinessCity ||
    !isBuisnessPortal ||
    !isBusinessSector ||
    !isEmployeesNumber ||
    !isUrl
  )
    return errors;

  await supabase.auth.updateUser({
    data: {
      nexuraBusinessAccount: true,
    },
  });

  const { error } = await supabase
    .from("business_accounts")
    .insert([
      {
        user_id: user?.id,
        businessName: businessName,
        businessCountry: businessCountry,
        businessAddress: businessAddress,
        businessCity: businessCity,
        businessPostal: businessPostal,
        businessSector: businessSector,
        employeesNumber: employeesNumber,
        businessWebsite: businessWebsite || "",
      },
    ])
    .select();

  if (error) {
    errors.message =
      "Something went wrong while creating your business account. Please try again later.";
    return errors;
  }

  redirect("/business-account/home");
}

export async function deleteBusinessAccount(_: unknown, formData: FormData) {
  try {
    const supabase = await createClient();
    const userID = formData.get("userID") as string;

    console.log(userID);

    const { error } = await supabase
      .from("business_accounts")
      .delete()
      .eq("user_id", userID);

    if (error) throw new Error(error?.message);

    await supabase.auth.updateUser({
      data: {
        nexuraBusinessAccount: false,
      },
    });

    revalidatePath("/", "layout");
  } catch (error) {
    console.error(error);
  }
}
