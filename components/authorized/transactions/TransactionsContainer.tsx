"use client";

import TransactionsSearchEngine from "./TransactionsSearchEngine";
import TransactionsTable from "./TransactionsTable";
import { useState } from "react";
import formatString, { capitalizeString } from "@/utilities/formatString";
import { TransactionDataType } from "@/types/types";
import { UserMetadata } from "@supabase/supabase-js";
import NoTransactionsCard from "./NoTransactionsCard";
import Pagination from "@/components/common/Pagination";
import { ITEM_AMOUNT_PER_PAGE } from "@/constant/constants";
import { useSearchParams } from "next/navigation";

function TransactionsContainer({
  userData,
  allTransactions,
}: {
  userData: UserMetadata | undefined;
  allTransactions: TransactionDataType[];
}) {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [pagination, setPagination] = useState(0);

  const filterAction = searchParams.get("action") || "";

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(() => e.target.value);
  }

  const transactionsBySearchResults = allTransactions
    .filter((transaction) =>
      searchValue
        ? formatString(
            transaction.recipientFullName ||
              `${userData?.firstName} ${userData?.lastName} via ${capitalizeString(transaction.paymentMethod)}`,
          ).includes(formatString(searchValue))
        : transaction,
    )
    .filter((transaction) =>
      filterAction === "withdrawn" || filterAction === "pawn"
        ? transaction.actionType === filterAction
        : transaction,
    );

  function handleNextPage() {
    if (
      Math.ceil(transactionsBySearchResults.length / ITEM_AMOUNT_PER_PAGE) <=
      pagination + 1
    )
      return;
    setPagination((prev) => prev + 1);
  }

  function handlePreviousPage() {
    if (pagination <= 0) return;
    setPagination((prev) => prev - 1);
  }

  function handlePaginationDirect(page: number) {
    setPagination(page);
  }

  const paginatedTransactions = transactionsBySearchResults.slice(
    pagination * ITEM_AMOUNT_PER_PAGE,
    ITEM_AMOUNT_PER_PAGE * (pagination + 1),
  );

  const totalPageNumber = Math.ceil(
    transactionsBySearchResults.length / ITEM_AMOUNT_PER_PAGE,
  );

  return (
    <>
      <TransactionsSearchEngine
        searchValue={searchValue}
        handleSearch={handleSearch}
        isTransactionsExist={allTransactions.length > 0}
        isSearchResultExist={transactionsBySearchResults.length > 0}
      />

      {allTransactions.length > 0 ? (
        <TransactionsTable
          transactions={paginatedTransactions}
          userData={userData}
        />
      ) : (
        <NoTransactionsCard />
      )}

      {allTransactions.length > 0 &&
        transactionsBySearchResults.length <= 0 && (
          <p className="mt-8 text-center text-gray-400">
            No results found{searchValue ? ` for '${searchValue}'` : ""}.
          </p>
        )}

      {totalPageNumber > 1 && (
        <div className="mt-14">
          <Pagination
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
            handlePaginationDirect={handlePaginationDirect}
            pagination={pagination}
            totalPageNumber={totalPageNumber}
          />
        </div>
      )}
    </>
  );
}

export default TransactionsContainer;
