import AuthNavigation from "@/components/common/AuthNavigation";
import MiniLoading from "@/components/common/MiniLoading";
import { createClient } from "@/data/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function FormsLayout({
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
    <div className="px-48 py-10">
      <AuthNavigation path="/home" />
      <Suspense fallback={<MiniLoading />}>{children}</Suspense>
    </div>
  );
}
