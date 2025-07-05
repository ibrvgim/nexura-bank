import Link from "next/link";
import { createClient } from "@/data/supabase/server";
import { TransactionDataType } from "@/types/types";
import { capitalizeString } from "@/utilities/formatString";
import { formatIntlDate } from "@/utilities/formatDate";
import { ArrowLongRightIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

async function TransactionsOverview() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: allTransactions } = await supabase
    .from("transactions_personal")
    .select("*");

  const currentUserTransactions: TransactionDataType[] = allTransactions?.find(
    (item) => item.user_id === user?.id,
  ).transactions;

  return (
    <div className="my-15">
      <div className="mb-7 flex items-center justify-between">
        <p className="text-2xl font-medium">Recent Transactions</p>
        <Link
          href="/transactions"
          className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-200 hover:text-gray-800"
        >
          See All
          <ArrowLongRightIcon className="size-4" />
        </Link>
      </div>

      {currentUserTransactions.length > 0 ? (
        <table className="w-full border-collapse">
          <tbody className="*:text-start">
            {currentUserTransactions.slice(0, 4).map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b-1 border-b-gray-300 pb-4 text-sm"
              >
                <th
                  scope="row"
                  className="py-5 text-start font-medium text-gray-700"
                >
                  {transaction.recipientFullName ||
                    `${user?.user_metadata?.firstName} ${user?.user_metadata?.lastName} via ${capitalizeString(transaction.paymentMethod)}`}
                </th>
                <td className="font-light tracking-wide text-gray-500">
                  {transaction.id}
                </td>
                <td className="font-light text-gray-500">
                  {formatIntlDate(transaction.transactionDate)}
                </td>
                <td
                  className={`text-end ${transaction.actionType === "pawn" ? "text-green-500" : "text-red-500"} `}
                >
                  {transaction.actionType === "pawn" ? "+" : "-"}
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span className="flex items-center gap-4 text-gray-400 capitalize">
          <span className="rounded-full bg-stone-200 p-3 text-gray-500">
            <ArrowPathIcon className="size-5" />
          </span>
          No Transactions Yet
        </span>
      )}
    </div>
  );
}

export default TransactionsOverview;
