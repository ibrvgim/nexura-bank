import { TransactionType } from "@/types/types";
import { formatIntlDate } from "@/utilities/formatDate";

function TransactionsTable({
  transactions,
}: {
  transactions: TransactionType[];
}) {
  return (
    <table className="mt-7 w-full border-collapse">
      <thead>
        <tr className="border-b-1 border-b-gray-300 *:text-start *:text-xs *:font-normal *:text-gray-500">
          <th scope="col" className="py-3">
            Recipient / Sender
          </th>
          <th scope="col">Transaction ID</th>
          <th scope="col">Transaction Date</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>

      <tbody className="*:text-start">
        {transactions.map((transaction) => (
          <tr
            key={transaction.id}
            className="border-b-1 border-b-gray-300 pb-4 *:text-start *:text-sm"
          >
            <th scope="row" className="py-5 font-medium text-gray-700">
              {transaction.recipient}
            </th>
            <td className="font-light text-gray-500">{transaction.id}</td>
            <td className="font-light text-gray-500">
              {formatIntlDate(transaction.transactionDate)}
            </td>
            <td
              className={`${transaction.action === "deposited" ? "text-green-500" : "text-red-500"} `}
            >
              {transaction.action === "deposited" ? "+" : "-"}
              {transaction.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;
