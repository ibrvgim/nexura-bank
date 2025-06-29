"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/data/supabase/server";
import { getID } from "@/utilities/getID";

interface ErrorsType {
  [key: string]: string;
}

// REGISTRATION ACTION
export async function handleRegistration(_: unknown, formData: FormData) {
  const supabase = await createClient();
  const actionType = formData.get("action") as string | null;
  const userData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        nexuraBusinessAccount: !!formData.get("nexuraBusiness") as boolean,
        customerNumber: getID(),
      },
    },
  };

  const errors: ErrorsType = {};

  const { data, error } = await supabase.auth.signUp(userData);

  if (error) {
    errors["message"] =
      error?.message ||
      "Something went wrong during registration. Please try again later.";
    return errors;
  }

  await supabase
    .from("transactions_personal")
    .insert([{ user_id: data?.user?.id }])
    .select();

  revalidatePath("/", "layout");
  if (actionType === "businessAccount") redirect("/create-business-account");
  else redirect("/home");
}

// LOGIN ACTION
export async function handleLogin(_: unknown, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const actionType = formData.get("action") as string;

  const errors: ErrorsType = {};

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email.trim());
  const isPasswordValid = password.length >= 8;

  if (!email) {
    errors["email"] = "Must be filled in";
  } else if (!isEmailValid) {
    errors["email"] = "Enter correct email";
  }

  if (!password) {
    errors["password"] = "Must be filled in";
  } else if (!isPasswordValid) {
    errors["password"] = "Minimum 8 characters";
  }

  const isErrorsExist = Object.entries(errors).length > 0;
  if (isErrorsExist) return errors;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    errors["credentials"] =
      "Your email or password is incorrect. Please try again or click 'Problem with logging in' to reset it.";
    return errors;
  }

  revalidatePath("/", "layout");

  if (
    actionType === "businessAccount" &&
    data.user.user_metadata?.nexuraBusinessAccount
  ) {
    redirect("/business-account/home");
  } else redirect("/home");
}

// LOGOUT ACTION
export async function handleLogout() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  revalidatePath("/", "layout");
  redirect("/");
}
