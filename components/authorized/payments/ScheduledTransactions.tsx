import PaymentItem from "@/components/forms/send-money/PaymentItem";
import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

function ScheduledTransactions() {
  return (
    <div className="mt-10 border-t border-t-gray-300 pt-10">
      <p className="mb-6 text-xl font-semibold tracking-wide text-gray-700">
        Scheduled Payments
      </p>

      <div className="grid grid-cols-2 gap-x-3 gap-y-5">
        <Link
          href="/payments/5793757597974"
          className="group relative block overflow-hidden rounded-2xl border-2 border-gray-300 p-8"
        >
          <PaymentItem
            title="Recipient Information"
            value="Alex Johnson"
            cutValue={24}
          />
          <PaymentItem
            title="IBAN / Account Number"
            value="DE12 4675 7465 7465 787"
            cutValue={22}
          />
          <PaymentItem title="SWIFT" value="SWIBTR17" />
          <PaymentItem title="Scheduled Date" value="17 June 2025" />

          <span className="mt-6 block">
            <PaymentItem title="Total Amount" value="180,00$" isBold last />
          </span>

          <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center pt-50 opacity-0 backdrop-blur-xs transition-all duration-300 group-hover:pt-0 group-hover:opacity-100">
            <PencilSquareIcon className="size-12 text-gray-400 transition-colors duration-300 hover:text-green-400" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ScheduledTransactions;
