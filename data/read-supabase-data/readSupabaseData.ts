import { createClient } from "../supabase/server";

export async function readBusinessAccount(id: string) {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("business_accounts")
      .select("*");

    if (error) throw new Error(error?.message);

    return data.find((item) => item.user_id === id);
  } catch (error) {
    console.error(error);
  }
}
