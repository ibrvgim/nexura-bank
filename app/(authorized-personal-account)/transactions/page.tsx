import TransactionsContainer from "@/components/authorized/transactions/TransactionsContainer";
import Pagination from "@/components/common/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions",
};

async function Transactions() {
  const response = await fetch("http://localhost:3000/data/transactions.json");
  const data = await response.json();
  const allTransactions = data.transactions;

  return (
    <>
      <TransactionsContainer allTransactions={allTransactions} />

      <div className="mt-10">
        <Pagination />
      </div>
    </>
  );
}

export default Transactions;
