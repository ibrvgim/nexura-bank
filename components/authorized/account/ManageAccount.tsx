import {
  ChevronRightIcon,
  LockClosedIcon,
  UserIcon,
  DocumentTextIcon,
  BellAlertIcon,
  ChatBubbleOvalLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function ManageAccount() {
  return (
    <div>
      <p className="mx-4 mb-5 text-xl font-medium tracking-wide text-gray-700">
        Actions & Managements
      </p>
      <ul className="flex flex-col gap-3">
        <ActionButton title="Personal Details" path="" icon={<UserIcon />}>
          Update your personal information.
        </ActionButton>

        <ActionButton
          title="Security & Privacy"
          path=""
          icon={<LockClosedIcon />}
        >
          Change your security and privacy settings.
        </ActionButton>

        <ActionButton title="Notifications" path="" icon={<BellAlertIcon />}>
          Customize how you get updates.
        </ActionButton>

        <ActionButton
          title="Customer Service"
          path=""
          icon={<ChatBubbleOvalLeftIcon />}
        >
          Get help any time you need.
        </ActionButton>

        <ActionButton
          title="Nexura Agreements"
          path=""
          icon={<DocumentTextIcon />}
        >
          Agreements regarding your account.
        </ActionButton>

        <span>&nbsp;</span>

        <ActionButton title="Close Account" path="" icon={<XMarkIcon />}>
          Delete your account.
        </ActionButton>
      </ul>
    </div>
  );
}

function ActionButton({
  title,
  children,
  icon,
  path,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  path: string;
}) {
  return (
    <li>
      <Link
        href={path}
        className="group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 hover:bg-stone-100"
      >
        <span className="relative inline-block rounded-full bg-stone-200 p-4 transition-all duration-200 *:size-6 group-hover:bg-stone-300">
          {icon}
        </span>

        <div>
          <p>{title}</p>
          <p className="mt-1 text-sm text-gray-500">{children}</p>
        </div>

        <span className="ml-auto inline-block">
          <ChevronRightIcon className="size-5" />
        </span>
      </Link>
    </li>
  );
}

export default ManageAccount;
