"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/data/supabase/server";

interface ErrorsType {
  [key: string]: string;
}

// REGISTRATION ACTION
export async function handleRegistration(_: unknown, formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        phoneNumber: formData.get("phoneNumber") as string,
      },
    },
  };

  const errors: ErrorsType = {};

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    if (error) {
      errors["message"] =
        "Something went wrong during registration. Please try again later.";
      return errors;
    }
  }

  revalidatePath("/", "layout");
  redirect("/home");
}

// LOGIN ACTION
export async function handleLogin(_: unknown, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

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

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    errors["credentials"] =
      "Your email or password is incorrect. Please try again or click 'Problem with logging in' to reset it.";
    return errors;
  }

  revalidatePath("/", "layout");
  redirect("/home");
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
