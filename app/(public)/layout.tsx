import Footer from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main className="px-20">{children}</main>
      <Footer />
    </>
  );
}
