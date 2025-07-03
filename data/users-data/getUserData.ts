import { createClient } from "../supabase/server";

export async function getUserData() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error?.message);

  return data.user;
}
