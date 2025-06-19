import Footer from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";
import { createClient } from "@/data/supabase/server";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Navigation isUserLoggedIn={!!user} />
      <main className="px-20">{children}</main>
      <Footer />
    </>
  );
}
