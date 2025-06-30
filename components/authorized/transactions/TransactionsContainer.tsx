"use client";

import TransactionsSearchEngine from "./TransactionsSearchEngine";
import TransactionsTable from "./TransactionsTable";
import { useState } from "react";
import formatString, { capitalizeString } from "@/utilities/formatString";
import { TransactionDataType } from "@/types/types";
import { UserMetadata } from "@supabase/supabase-js";
import NoTransactionsCard from "./NoTransactionsCard";

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
      ? formatString(
          transaction.recipientFullName ||
            `${userData?.firstName} ${userData?.lastName} via ${capitalizeString(transaction.paymentMethod)}`,
        ).includes(formatString(searchValue))
      : transaction,
  );

  return (
    <>
      <TransactionsSearchEngine
        searchValue={searchValue}
        handleSearch={handleSearch}
        isTransactionsExist={allTransactions.length > 0}
      />
      {allTransactions.length > 0 ? (
        <TransactionsTable
          transactions={transactionsBySearchResults}
          userData={userData}
        />
      ) : (
        <NoTransactionsCard />
      )}
    </>
  );
}

export default TransactionsContainer;
