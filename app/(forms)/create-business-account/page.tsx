import BusinessFormContainer from "@/components/forms/create-business-account/BusinessFormContainer";
import { getCountries } from "@/data/api/getCountries";
import { createClient } from "@/data/supabase/server";
import { UserDataType } from "@/types/types";
import { redirect } from "next/navigation";

async function CreateBusinessAccount() {
  const allCountries = await getCountries();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { nexuraBusinessAccount } = user?.user_metadata as UserDataType;

  if (nexuraBusinessAccount) redirect("/business-account/home");

  return <BusinessFormContainer allCountries={allCountries} />;
}

export default CreateBusinessAccount;
