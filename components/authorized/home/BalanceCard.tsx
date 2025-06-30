import formatNumber from "@/utilities/formatNumber";
import { PaperAirplaneIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function BalanceCard({ currentBalance }: { currentBalance: number }) {
  return (
    <div className="flex gap-5">
      <div className="inline-block min-w-1/3 rounded-lg bg-green-400 p-6 text-white">
        <p className="tracking-wide">Current Balance</p>
        <p className="mt-2 text-4xl font-semibold">
          €{formatNumber(currentBalance)}
        </p>
      </div>

      <div className="flex flex-col gap-2 text-xs font-medium text-gray-500 *:flex *:h-full *:cursor-pointer *:items-center *:gap-2 *:rounded-lg *:border-2 *:border-gray-300 *:px-8 *:uppercase *:transition-all *:duration-300 *:hover:border-gray-700 *:hover:bg-gray-700 *:hover:text-white">
        <Link href="/send-money">
          <PaperAirplaneIcon className="size-4" />
          Send Money
        </Link>

        <Link href="/add-money">
          <PlusCircleIcon className="size-4" />
          Add Money
        </Link>
      </div>
    </div>
  );
}

export default BalanceCard;
