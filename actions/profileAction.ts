"use server";

import { createClient } from "@/data/supabase/server";
import { revalidatePath } from "next/cache";

interface ErrorsType {
  [key: string]: string;
}

const errors: ErrorsType = {};

export async function updateProfile(_: unknown, formData: FormData) {
  const supabase = await createClient();

  const data = {
    firstName: formData?.get("firstName") as string | null,
    lastName: formData?.get("lastName") as string | null,
    phoneNumber: formData?.get("phoneNumber") as string | null,
    nexuraBusinessAccount: !!formData?.get("nexuraBusiness") as boolean | null,
    // avatar: formData.get("avatar") as string | null,
  };

  const { error } = await supabase.auth.updateUser({
    data,
  });

  if (error) {
    console.error("Supabase error:", error);
    errors["message"] = "Something went wrong. Please try again later.";
    return errors;
  }

  revalidatePath("/", "layout");
}
