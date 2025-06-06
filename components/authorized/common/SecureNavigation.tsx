import Logo from "@/components/common/Logo";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function SecureNavigation() {
  return (
    <nav className="col-span-full mb-16 flex items-center justify-between">
      <Logo path="/home" />

      <Link
        href="/account"
        className="flex items-center gap-2 font-medium text-gray-500 hover:text-green-400"
      >
        <UserCircleIcon className="size-8" />
        <p className="text-[13px] tracking-wide uppercase">Imran Gasimov</p>
      </Link>
    </nav>
  );
}

export default SecureNavigation;
