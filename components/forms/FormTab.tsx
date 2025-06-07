import formatString from "@/utilities/formatString";
import Link from "next/link";

function FormTab({
  children,
  path,
  accountType,
}: {
  children: React.ReactNode;
  path: string;
  accountType: string;
}) {
  const isActive = formatString(accountType) === formatString(path);

  return (
    <Link
      href={`?accountType=${path}`}
      className={`block flex-1 border-b-3 pb-2 transition-all duration-200 ${isActive ? "border-b-gray-600 font-medium text-gray-700" : "border-b-gray-300 text-gray-400"}`}
    >
      {children}
    </Link>
  );
}

export default FormTab;
