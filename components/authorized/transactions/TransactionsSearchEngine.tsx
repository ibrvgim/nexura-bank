import BasicModalWindow from "@/components/common/BasicModalWindow";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import FiltersContainer from "./FiltersContainer";

function TransactionsSearchEngine({
  searchValue,
  handleSearch,
  isTransactionsExist,
}: {
  searchValue: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isTransactionsExist: boolean;
}) {
  const [openFilters, setOpenFIlters] = useState(false);

  const handleOpenFilters = () => setOpenFIlters(true);
  const handleCloseFilters = () => setOpenFIlters(false);

  return (
    <div className="flex items-center justify-between pb-5">
      <p className="text-3xl font-semibold tracking-wide text-gray-700">
        Transactions
      </p>

      <div className="flex items-center gap-5">
        <BasicModalWindow
          open={openFilters}
          handleClose={handleCloseFilters}
          button={
            <button
              className={`flex items-center rounded-full px-4 py-1 text-sm tracking-wide text-white outline-1 ${isTransactionsExist ? "cursor-pointer bg-green-400 outline-green-400 transition-colors duration-200 hover:bg-transparent hover:text-green-500" : "cursor-not-allowed bg-stone-400 text-stone-500 opacity-70 outline-stone-400"}`}
              onClick={handleOpenFilters}
              disabled={!isTransactionsExist}
            >
              <AdjustmentsHorizontalIcon className="mr-2 inline-block size-4" />
              Filters
            </button>
          }
          windowOnSide
        >
          <FiltersContainer handleCloseFilters={handleCloseFilters} />
        </BasicModalWindow>

        <div className={`relative ${isTransactionsExist ? "" : "opacity-50"}`}>
          <MagnifyingGlassIcon className="absolute top-[23%] left-3 size-4 text-gray-600" />

          <input
            type="search"
            placeholder="Search Transaction"
            className="w-80 rounded-full py-1 pr-3 pl-9 text-sm outline-1 outline-gray-500 transition-all duration-200 placeholder:text-gray-400 hover:outline-gray-900 focus:outline-2 focus:outline-gray-900"
            value={searchValue}
            onChange={handleSearch}
            disabled={!isTransactionsExist}
          />
        </div>
      </div>
    </div>
  );
}

export default TransactionsSearchEngine;
