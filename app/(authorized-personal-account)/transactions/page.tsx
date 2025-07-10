import TransactionsContainer from "@/components/authorized/transactions/TransactionsContainer";
import { createClient } from "@/data/supabase/server";
import { TransactionDataType } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions",
};

async function Transactions() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: allTransactions } = await supabase
    .from("transactions_personal")
    .select("*");

  const currentUserTransactions = allTransactions
    ?.find((item) => item.user_id === user?.id)
    .transactions.sort(
      (a: TransactionDataType, b: TransactionDataType) =>
        new Date(b.transactionDate).getTime() -
        new Date(a.transactionDate).getTime(),
    );

  return (
    <>
      <TransactionsContainer
        allTransactions={currentUserTransactions}
        userData={user?.user_metadata}
      />
    </>
  );
}

export default Transactions;
