import SecureNavigation from "@/components/authorized/common/SecureNavigation";
import SideBar from "@/components/authorized/common/SideBar";

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[20rem_1fr] gap-x-5 px-20 pt-16 pb-30">
      <SecureNavigation />
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
