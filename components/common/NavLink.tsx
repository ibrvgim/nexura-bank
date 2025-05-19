import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const pathname = usePathname();
  const isActive = path === pathname;
  const darkNavigation = pathname.includes("business");

  return (
    <Link
      href={path}
      className={`rounded-full px-4 py-1 text-[15px] tracking-wide transition-all duration-300 ${isActive ? "bg-green-200 text-black" : "hover:bg-gray-200"} ${darkNavigation && !isActive ? "hover:bg-green-700" : isActive && darkNavigation ? "bg-green-200 text-gray-700" : ""}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
