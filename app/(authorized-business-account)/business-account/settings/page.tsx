import Logout from "@/components/authorized/settings/Logout";
import ManageAccount from "@/components/authorized/settings/ManageAccount";
import PersonalCard from "@/components/authorized/settings/PersonalCard";
import ActionLink from "@/components/authorized/common/ActionLink";
import CopyToClipboard from "@/components/common/CopyToClipboard";
import { readBusinessAccount } from "@/data/read-supabase-data/readSupabaseData";
import { createClient } from "@/data/supabase/server";
import { BusinessAccountType, UserDataType } from "@/types/types";
import { createInitials } from "@/utilities/formatString";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings",
};

async function Account() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { firstName, lastName, customerNumber } =
    user?.user_metadata as UserDataType;

  const businessAccountData: BusinessAccountType = await readBusinessAccount(
    user?.id,
  );

  return (
    <>
      <p className="text-3xl font-semibold tracking-wide text-gray-700">
        Account Settings
      </p>

      <div className="mt-10 flex gap-10 *:flex-1">
        <div>
          <PersonalCard
            accountHolder={businessAccountData?.businessName}
            isAccountBusiness
          />

          <div className="mt-10">
            <ActionLink
              icon={createInitials(`${firstName} ${lastName}`)}
              title={`${firstName} ${lastName}`}
              path="/home"
              isPrimary
            >
              Personal Account
            </ActionLink>
          </div>

          <p className="my-6 text-center text-[15px] text-stone-500">
            Nexura Customer Number:{" "}
            <CopyToClipboard>{customerNumber}</CopyToClipboard>
          </p>

          <Logout />
        </div>

        <ManageAccount userID={user?.id} />
      </div>
    </>
  );
}

export default Account;
