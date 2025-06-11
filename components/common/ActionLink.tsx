import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function ActionLink({
  title,
  children,
  icon,
  path,
  isTitleBold = false,
  onClick,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  path?: string;
  isTitleBold?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <>
      <span className="relative inline-block rounded-full bg-stone-200 p-4 transition-all duration-200 *:size-6 group-hover:bg-stone-300">
        {icon}
      </span>

      <div className="mr-12">
        <p className={isTitleBold ? "font-medium" : ""}>{title}</p>
        <p className="mt-1 text-sm text-gray-500">{children}</p>
      </div>

      <span className="ml-auto inline-block">
        <ChevronRightIcon className="size-5" />
      </span>
    </>
  );

  return (
    <li>
      {onClick ? (
        <ActionContainerButton onClick={onClick}>
          {content}
        </ActionContainerButton>
      ) : (
        <ActionContainerLink path={path}>{content}</ActionContainerLink>
      )}
    </li>
  );
}

function ActionContainerLink({
  children,
  path,
}: {
  children: React.ReactNode;
  path?: string;
}) {
  return (
    <Link
      href={path || ""}
      className="group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-stone-100"
    >
      {children}
    </Link>
  );
}

function ActionContainerButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="group flex w-full cursor-pointer items-center gap-4 rounded-2xl px-4 py-3 text-start transition-all duration-200 hover:bg-stone-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionLink;
