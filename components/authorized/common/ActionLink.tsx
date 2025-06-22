import Link from "next/link";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";

function ActionLink({
  icon,
  title,
  children,
  path,
  isPrimary = false,
}: {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  path?: string;
  isPrimary?: boolean;
}) {
  return (
    <Link
      href={path || ""}
      scroll
      className={`group flex items-center gap-4 rounded-2xl border-2 px-4 py-5 font-medium transition-all duration-200 hover:bg-stone-100 ${isPrimary ? "border-stone-100 bg-stone-100 hover:opacity-70" : "border-dashed border-stone-300 bg-stone-50 hover:border-stone-400"}`}
    >
      <div
        className={`relative inline-block rounded-full bg-stone-200 p-4 transition-all duration-200 ${isPrimary ? "" : "group-hover:bg-stone-300"}`}
      >
        <span className="*:size-6">{icon}</span>

        {!isPrimary && (
          <span className="absolute right-0 bottom-0 rounded-full border-2 border-white bg-green-300">
            <PlusIcon className="size-4" />
          </span>
        )}
      </div>

      <div>
        <p>{title}</p>
        {children && (
          <p className="mt-1 text-sm font-normal text-gray-500">{children}</p>
        )}
      </div>

      <span className="ml-auto inline-block">
        <ChevronRightIcon className="size-5" />
      </span>
    </Link>
  );
}

export default ActionLink;
