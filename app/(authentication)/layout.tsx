import AuthNavigation from "@/components/common/AuthNavigation";
import { createClient } from "@/data/supabase/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Nexura Online Banking",
    default: "Login | Nexura Online Banking",
  },
};

export default async function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect("/home");

  return (
    <main className="px-48 py-10">
      <AuthNavigation />
      {children}
    </main>
  );
}
