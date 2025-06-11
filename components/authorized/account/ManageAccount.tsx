import ActionLink from "@/components/common/ActionLink";
import {
  LockClosedIcon,
  UserIcon,
  DocumentTextIcon,
  BellAlertIcon,
  ChatBubbleOvalLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function ManageAccount() {
  return (
    <div>
      <p className="mx-4 mb-5 text-xl font-medium tracking-wide text-gray-700">
        Actions & Managements
      </p>
      <ul className="flex flex-col gap-3">
        <ActionLink title="Personal Details" path="" icon={<UserIcon />}>
          Update your personal information.
        </ActionLink>

        <ActionLink
          title="Security & Privacy"
          path=""
          icon={<LockClosedIcon />}
        >
          Change security and privacy settings.
        </ActionLink>

        <ActionLink title="Notifications" path="" icon={<BellAlertIcon />}>
          Customize how you get updates.
        </ActionLink>

        <ActionLink
          title="Customer Service"
          path=""
          icon={<ChatBubbleOvalLeftIcon />}
        >
          Get help any time you need.
        </ActionLink>

        <ActionLink
          title="Nexura Agreements"
          path=""
          icon={<DocumentTextIcon />}
        >
          Agreements regarding your account.
        </ActionLink>

        <span>&nbsp;</span>

        <ActionLink title="Close Account" path="" icon={<XMarkIcon />}>
          Delete your account.
        </ActionLink>
      </ul>
    </div>
  );
}

export default ManageAccount;
