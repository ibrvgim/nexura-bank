import ActionsContainer from "@/components/authorized/payments/ActionsContainer";
import ScheduledTransactions from "@/components/authorized/payments/ScheduledTransactions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payments",
};

function Payments() {
  return (
    <>
      <p className="text-3xl font-extrabold tracking-wide text-gray-700">
        Payments
      </p>

      <ActionsContainer />
      <ScheduledTransactions />
    </>
  );
}

export default Payments;
