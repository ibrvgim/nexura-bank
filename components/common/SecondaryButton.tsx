import Link from "next/link";

function SecondaryButton({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  return (
    <Link
      href={path}
      className="rounded-full border-3 border-gray-500 px-6 py-1 font-medium tracking-wide transition-all hover:border-green-500 hover:text-green-500"
    >
      {children}
    </Link>
  );
}

export default SecondaryButton;
