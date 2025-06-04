import { PaperAirplaneIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

function BalanceCard() {
  return (
    <div className="mt-10 flex gap-5">
      <div className="inline-block w-1/3 rounded-lg bg-green-400 p-6 text-white">
        <p className="text-[15px] tracking-wide">Current Balance</p>
        <p className="mt-1 text-4xl font-semibold">€4,836.00</p>
      </div>

      <div className="flex flex-col gap-2 text-xs font-medium text-gray-500 *:flex *:h-full *:cursor-pointer *:items-center *:gap-2 *:rounded-lg *:border-2 *:border-gray-300 *:px-8 *:uppercase *:transition-all *:duration-300 *:hover:border-gray-700 *:hover:bg-gray-700 *:hover:text-white">
        <button>
          <PaperAirplaneIcon className="size-4" />
          Send Money
        </button>

        <button>
          <PlusCircleIcon className="size-4" />
          Add Money
        </button>
      </div>
    </div>
  );
}

export default BalanceCard;
