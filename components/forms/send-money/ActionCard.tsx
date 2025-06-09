import Link from "next/link";

function ActionCard({
  icon,
  title,
  children,
  pathTitle,
  path,
  style,
}: {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  pathTitle?: string;
  path: string;
  style?: string;
}) {
  return (
    <div className="flex items-center gap-4 font-medium">
      <div className="inline-block rounded-full bg-stone-200 p-4">
        <span className="*:size-6">{icon}</span>
      </div>

      <div>
        <p className="text-[15px] font-normal text-gray-500">{title}</p>
        {children && <p className={`tracking-wide ${style}`}>{children}</p>}
      </div>

      {pathTitle ? (
        <Link
          href={path}
          className="ml-auto inline-block min-w-28 rounded-full border-2 border-green-400 px-4 text-center text-sm font-normal tracking-wide text-green-400 transition-colors duration-200 hover:border-green-600 hover:text-green-600"
        >
          {pathTitle}
        </Link>
      ) : (
        <p className="ml-auto text-2xl font-extrabold text-gray-700">
          €1.995,00
        </p>
      )}
    </div>
  );
}

export default ActionCard;
