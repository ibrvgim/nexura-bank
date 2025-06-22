import BusinessFormContainer from "@/components/forms/create-business-account/BusinessFormContainer";
import { createClient } from "@/data/supabase/server";
import { UserDataType } from "@/types/types";
import { redirect } from "next/navigation";

async function CreateBusinessAccount() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { nexuraBusinessAccount } = user?.user_metadata as UserDataType;

  if (nexuraBusinessAccount) redirect("/business-account/home");

  return <BusinessFormContainer />;
}

export default CreateBusinessAccount;
