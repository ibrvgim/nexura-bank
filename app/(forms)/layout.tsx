import AuthNavigation from "@/components/authentication/AuthNavigation";

export default function FormsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-48 py-9">
      <AuthNavigation />
      {children}
    </div>
  );
}
