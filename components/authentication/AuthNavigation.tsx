"use client";

import { useRouter } from "next/navigation";
import Logo from "../common/Logo";
import { XMarkIcon } from "@heroicons/react/24/solid";

function AuthNavigation({ path }: { path?: string }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between border-b-2 border-b-gray-300 pb-8">
      <Logo path={path} />

      <button
        className="size-7 cursor-pointer text-gray-700 transition-all hover:text-green-500"
        onClick={() => router.back()}
      >
        <XMarkIcon />
      </button>
    </div>
  );
}

export default AuthNavigation;
