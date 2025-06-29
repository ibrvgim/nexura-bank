import AuthNavigation from "@/components/common/AuthNavigation";
import GoHome from "@/components/common/GoHome";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-screen px-48 py-10 text-center">
      <AuthNavigation path="/" />

      <div className="mt-20">
        <Image
          src="/illustrations/not-found.svg"
          alt="404 not found"
          height={350}
          width={350}
          draggable={false}
          className="mx-auto"
        />

        <p className="mt-12 mb-4 text-6xl font-extrabold tracking-wider text-gray-700 uppercase">
          Page Not Found
        </p>
        <p className="text-lg text-gray-400">Make sure the route is correct.</p>
      </div>

      <GoHome />
    </div>
  );
}
