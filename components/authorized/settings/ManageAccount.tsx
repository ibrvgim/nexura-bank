"use client";

import { deleteBusinessAccount } from "@/actions/businessAccountActions";
import ActionLink from "@/components/common/ActionLink";
import {
  LockClosedIcon,
  UserIcon,
  DocumentTextIcon,
  BellAlertIcon,
  ChatBubbleOvalLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useActionState } from "react";

function ManageAccount({ userID }: { userID?: string }) {
  const pathname = usePathname();
  const isBusinessAccount = pathname.includes("business-account");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, formAction] = useActionState(deleteBusinessAccount, null);

  return (
    <div>
      <p className="mx-4 mb-5 text-xl font-medium tracking-wide text-gray-700">
        Actions & Managements
      </p>
      <ul className="flex flex-col gap-3">
        <ActionLink
          title={isBusinessAccount ? "Business Details" : "Personal Details"}
          path=""
          icon={<UserIcon />}
        >
          {isBusinessAccount
            ? "Update your business information."
            : "Update your personal information."}
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
          path="/chat"
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

        <form action={isBusinessAccount ? formAction : ""}>
          <ActionLink
            title={
              isBusinessAccount
                ? "Close Business Account"
                : "Close Personal Account"
            }
            path=""
            icon={<XMarkIcon />}
            type="submit"
          >
            {isBusinessAccount
              ? "Delete your Business Account."
              : "Delete your Personal Account."}
          </ActionLink>
          {isBusinessAccount && (
            <input name="userID" value={userID} readOnly hidden />
          )}
        </form>
      </ul>
    </div>
  );
}

export default ManageAccount;
