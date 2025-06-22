"use client";

import Logo from "@/components/common/Logo";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function SecureNavigation({
  accountHolder,
  isBusinessAccount = false,
}: {
  accountHolder: string;
  isBusinessAccount?: boolean;
}) {
  return (
    <nav className="col-span-full mb-16 flex items-center justify-between">
      <Logo path={isBusinessAccount ? "/business-account/home" : "/home"} />

      <Link
        href={isBusinessAccount ? "/business-account/settings" : "/settings"}
        className="flex items-center gap-2 font-medium text-gray-500 transition-colors duration-200 hover:text-green-400"
      >
        <UserCircleIcon className="size-8" />
        <p className="text-[13px] tracking-wide uppercase">{accountHolder}</p>
      </Link>
    </nav>
  );
}

export default SecureNavigation;
