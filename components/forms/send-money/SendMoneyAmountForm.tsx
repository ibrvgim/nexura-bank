import getCurrencies from "@/data/getCurrencies";
import AmountInput from "./AmountInput";
import { CurrencyItem } from "@/types/types";
import ActionCard from "./ActionCard";
import {
  BuildingLibraryIcon,
  ClockIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

async function SendMoneyAmountForm() {
  const allCurrencies: CurrencyItem[] = (await getCurrencies()) || [];
  const isActive = false;

  return (
    <>
      <AmountInput
        label="Amount To Send:"
        name="sendAmount"
        type="text"
        placeholder="Amount to Send..."
        allCurrencies={allCurrencies}
      />

      <ul className="mt-12 mb-8 flex flex-col gap-8 border-b border-b-stone-300 pb-8">
        <li>
          <ActionCard
            icon={<BuildingLibraryIcon />}
            title="Paying with"
            pathTitle="Change"
            path=""
          >
            Bank Transfer
          </ActionCard>
        </li>

        <li>
          <ActionCard
            icon={<ClockIcon />}
            title="Arrives"
            pathTitle="Schedule"
            path=""
          >
            by Monday
          </ActionCard>
        </li>
      </ul>

      <ActionCard icon={<ReceiptPercentIcon />} title="Total amount" path="">
        with Fees
      </ActionCard>

      <Link
        href=""
        className={`mt-16 block rounded-full py-2 text-center font-medium tracking-wide outline-2 transition-all duration-200 ${isActive ? "bg-green-400 text-white outline-green-400 hover:bg-transparent hover:text-green-400" : "cursor-not-allowed bg-stone-300 text-stone-500 opacity-70 outline-stone-300"}`}
      >
        Continue
      </Link>
    </>
  );
}

export default SendMoneyAmountForm;
