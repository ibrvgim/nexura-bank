"use client";

import TransactionsSearchEngine from "./TransactionsSearchEngine";
import TransactionsTable from "./TransactionsTable";
import { useState } from "react";
import formatString from "@/utilities/formatString";
import { TransactionDataType } from "@/types/types";
import { UserMetadata } from "@supabase/supabase-js";

function TransactionsContainer({
  userData,
  allTransactions,
}: {
  userData: UserMetadata | undefined;
  allTransactions: TransactionDataType[];
}) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(() => e.target.value);
  }

  const transactionsBySearchResults = allTransactions.filter((transaction) =>
    searchValue
      ? formatString(transaction.recipientFullName).includes(
          formatString(searchValue),
        )
      : transaction,
  );

  return (
    <>
      <TransactionsSearchEngine
        searchValue={searchValue}
        handleSearch={handleSearch}
      />
      {allTransactions.length > 0 ? (
        <TransactionsTable
          transactions={transactionsBySearchResults}
          userData={userData}
        />
      ) : (
        <p>No transactions</p>
      )}
    </>
  );
}

export default TransactionsContainer;
