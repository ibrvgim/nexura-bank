import TransactionsSearchEngine from "@/components/authorized/transactions/TransactionsSearchEngine";
import TransactionsTable from "@/components/authorized/transactions/TransactionsTable";
import Pagination from "@/components/common/Pagination";

function Transactions() {
  return (
    <>
      <TransactionsSearchEngine />
      <TransactionsTable />

      <div className="mt-10">
        <Pagination />
      </div>
    </>
  );
}

export default Transactions;
