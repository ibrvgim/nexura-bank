import SecureNavigation from "@/components/authorized/common/SecureNavigation";
import SideBar from "@/components/authorized/common/SideBar";
import MiniLoading from "@/components/common/MiniLoading";
import { createClient } from "@/data/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="grid grid-cols-[20rem_1fr] gap-x-10 px-30 pt-16 pb-30">
      <SecureNavigation />
      <SideBar />

      <Suspense fallback={<MiniLoading />}>
        <main>{children}</main>
      </Suspense>
    </div>
  );
}
