import formatString from "@/utilities/formatString";

function FormTab({
  children,
  type,
  accountType,
  handleAccountType,
}: {
  children: React.ReactNode;
  type: "eu" | "other";
  accountType: string;
  handleAccountType: (value: "eu" | "other") => void;
}) {
  const isActive = formatString(accountType) === formatString(type);

  return (
    <button
      className={`block flex-1 cursor-pointer border-b-3 pb-2 transition-all duration-200 ${isActive ? "border-b-gray-600 font-medium text-gray-700" : "border-b-gray-300 text-gray-400"}`}
      onClick={() => handleAccountType(type)}
    >
      {children}
    </button>
  );
}

export default FormTab;
