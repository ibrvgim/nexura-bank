"use client";

import { TransactionType } from "@/types/types";
import TransactionsSearchEngine from "./TransactionsSearchEngine";
import TransactionsTable from "./TransactionsTable";
import { useState } from "react";
import formatString from "@/utilities/formatString";

function TransactionsContainer({
  allTransactions,
}: {
  allTransactions: TransactionType[];
}) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(() => e.target.value);
  }

  const transactionsBySearchResults = allTransactions.filter((transaction) =>
    searchValue
      ? formatString(transaction.recipient).includes(formatString(searchValue))
      : transaction,
  );

  return (
    <>
      <TransactionsSearchEngine
        searchValue={searchValue}
        handleSearch={handleSearch}
      />
      <TransactionsTable transactions={transactionsBySearchResults} />
    </>
  );
}

export default TransactionsContainer;
