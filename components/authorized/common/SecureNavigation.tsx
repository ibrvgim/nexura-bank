import Logo from "@/components/common/Logo";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function SecureNavigation() {
  return (
    <nav className="col-span-full mb-16 flex items-center justify-between">
      <Logo />

      <Link href="" className="flex items-center gap-2 text-gray-600">
        <UserCircleIcon className="size-7" />
        <p className="tracking-wide">Imran Gasimov</p>
        <ChevronDownIcon className="size-4" />
      </Link>
    </nav>
  );
}

export default SecureNavigation;
