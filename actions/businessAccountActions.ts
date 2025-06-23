// "use server";

import { redirect } from "next/navigation";

interface ErrorType {
  [key: string]: string;
}

const errors: ErrorType = {};

function checkStringValidity(value: string, key: string, minLength?: number) {
  if (!value.trim()) {
    errors[key] = "Must be filled in";
    return false;
  }

  if (!minLength) return {};
  else if (value.trim().length < minLength) {
    errors[key] = `Minimum ${minLength} characters`;
    return false;
  } else {
    errors[key] = "";
    return true;
  }
}

function checkUrlValidity(value: string | null, key: string) {
  if (!value?.trim()) return;
  const isValid =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      value.trim(),
    );

  if (!isValid) {
    errors[key] = "Include valid link";
    return false;
  } else {
    errors[key] = "";
    return true;
  }
}

export async function handleBusinessAccount(_: unknown, formData: FormData) {
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

  redirect("/business-account/home");
}
