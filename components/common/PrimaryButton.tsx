import Link from "next/link";

function PrimaryButton({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  return (
    <Link
      href={path}
      className="rounded-full border-3 border-green-500 bg-green-500 px-8 py-1 font-medium tracking-wide text-gray-50 transition-all hover:border-green-600 hover:bg-green-600"
    >
      {children}
    </Link>
  );
}

export default PrimaryButton;
