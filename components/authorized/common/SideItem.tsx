"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function SideItem({
  children,
  path,
  icon,
}: {
  children: React.ReactNode;
  path: string;
  icon: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname.includes(path);

  return (
    <Link
      href={path}
      className={`flex w-full items-center gap-3 rounded-full px-6 py-3 text-[15px] tracking-wide transition-all duration-200 ${isActive ? "bg-stone-300 font-normal" : "text-gray-500 hover:bg-stone-100 hover:text-gray-900"}`}
    >
      <div className="size-5">{icon}</div>
      {children}
    </Link>
  );
}

export default SideItem;
