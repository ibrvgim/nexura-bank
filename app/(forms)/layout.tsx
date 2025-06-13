import AuthNavigation from "@/components/common/AuthNavigation";
import MiniLoading from "@/components/common/MiniLoading";
import { Suspense } from "react";

export default function FormsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-48 py-10">
      <AuthNavigation path="/home" />
      <Suspense fallback={<MiniLoading />}>{children}</Suspense>
    </div>
  );
}
