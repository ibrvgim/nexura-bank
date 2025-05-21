import AuthNavigation from "@/components/authentication/AuthNavigation";

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-48 py-9">
      <AuthNavigation />
      {children}
    </main>
  );
}
