import SecureNavigation from "@/components/authorized/common/SecureNavigation";
import SideBar from "@/components/authorized/common/SideBar";
import MiniLoading from "@/components/common/MiniLoading";
import { readBusinessAccount } from "@/data/read-supabase-data/readSupabaseData";
import { createClient } from "@/data/supabase/server";
import { BusinessAccountType, UserDataType } from "@/types/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Online Banking Account",
    default: "Nexura Account",
  },
};

export default async function AuthorizedBusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { nexuraBusinessAccount } = user?.user_metadata as UserDataType;

  if (!nexuraBusinessAccount) redirect("/create-business-account");

  const businessAccountData: BusinessAccountType = await readBusinessAccount(
    user?.id,
  );

  const { businessName } = businessAccountData;

  return (
    <div className="grid grid-cols-[20rem_1fr] gap-x-10 px-30 pt-16 pb-30">
      <SecureNavigation accountHolder={businessName} isBusinessAccount />
      <SideBar isBUsinessAccount />

      <Suspense fallback={<MiniLoading />}>
        <main>{children}</main>
      </Suspense>
    </div>
  );
}
