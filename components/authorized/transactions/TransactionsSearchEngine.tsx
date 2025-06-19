import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function TransactionsSearchEngine({
  searchValue,
  handleSearch,
}: {
  searchValue: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex items-center justify-between pb-5">
      <p className="text-3xl font-semibold tracking-wide text-gray-700">
        Transactions
      </p>

      <div className="flex items-center gap-5">
        <button className="flex cursor-pointer items-center rounded-full bg-green-400 px-4 py-1 text-sm tracking-wide text-white outline-1 outline-green-400 transition-colors duration-200 hover:bg-transparent hover:text-green-500">
          <AdjustmentsHorizontalIcon className="mr-2 inline-block size-4" />
          Filters
        </button>

        <div className="relative">
          <MagnifyingGlassIcon className="absolute top-[23%] left-3 size-4 text-gray-600" />

          <input
            type="search"
            placeholder="Search Transaction"
            className="w-80 rounded-full py-1 pr-3 pl-9 text-sm outline-1 outline-gray-500 transition-all duration-200 placeholder:text-gray-400 hover:outline-gray-900 focus:outline-2 focus:outline-gray-900"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default TransactionsSearchEngine;
