import AuthNavigation from "@/components/common/AuthNavigation";

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-48 py-10">
      <AuthNavigation />
      {children}
    </main>
  );
}
