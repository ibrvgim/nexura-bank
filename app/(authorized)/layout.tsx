import SecureNavigation from "@/components/authorized/common/SecureNavigation";
import SideBar from "@/components/authorized/common/SideBar";
import MiniLoading from "@/components/common/MiniLoading";
import { Suspense } from "react";

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
