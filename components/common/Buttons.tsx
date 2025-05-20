import Link from "next/link";

export function PrimaryButton({
  children,
  path,
  isStyleLight,
}: {
  children: React.ReactNode;
  path: string;
  isStyleLight?: boolean;
}) {
  return (
    <Link
      href={path}
      className={`rounded-full border-2 px-8 py-1 font-medium tracking-wide text-gray-50 transition-all duration-300 ${isStyleLight ? "border-green-200 bg-green-200 text-gray-700 hover:border-green-300 hover:bg-green-300" : "border-green-500 bg-green-500 hover:border-green-600 hover:bg-green-600"}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  children,
  path,
  isStyleLight,
}: {
  children: React.ReactNode;
  path: string;
  isStyleLight?: boolean;
}) {
  return (
    <Link
      href={path}
      className={`rounded-full border-2 px-6 py-1 font-medium tracking-wide transition-all duration-300 ${isStyleLight ? "border-green-200 text-green-200 hover:border-green-300 hover:text-green-300" : "border-gray-500 hover:border-green-500 hover:text-green-500"}`}
    >
      {children}
    </Link>
  );
}
