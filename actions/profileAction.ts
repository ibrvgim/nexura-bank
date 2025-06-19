"use server";

import { createClient } from "@/data/supabase/client";

export async function updateProfile(_: unknown, formData: FormData) {
  const supabase = createClient();

  const data = {
    id: formData.get("id") as string,
    fullname: formData.get("fullName") as string,
    avatar: formData.get("avatar") as string,
  };

  try {
    const { error } = await supabase.from("profiles").upsert(data);
    if (error) throw new Error(error.message);
    alert("Profile updated!");
  } catch (error) {
    alert(error);
  }
}
