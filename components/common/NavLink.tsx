"use client";

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

  return (
    <Link
      href={path}
      className={`rounded-full px-4 py-1 text-[15px] tracking-wide transition-all ${isActive ? "bg-green-200 text-black" : "hover:bg-gray-200"}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
