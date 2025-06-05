import {
  CalendarDaysIcon,
  ArrowPathIcon,
  BanknotesIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import ActionLink from "../common/ActionLink";

function ActionsContainer() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4">
      <ActionLink icon={<CalendarDaysIcon />} title="Schedule a Transfer">
        Set a transfer to send at a later date.
      </ActionLink>

      <ActionLink icon={<ArrowPathIcon />} title="Direct Debits">
        Manage regular payments.
      </ActionLink>

      <ActionLink icon={<BanknotesIcon />} title="Split a Bill">
        Split transactions with other people.
      </ActionLink>

      <ActionLink icon={<CreditCardIcon />} title="Payment Template">
        Create template for repeated payments.
      </ActionLink>
    </div>
  );
}

export default ActionsContainer;
