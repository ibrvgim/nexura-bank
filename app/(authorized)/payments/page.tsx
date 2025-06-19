import ActionsContainer from "@/components/authorized/payments/ActionsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payments",
};

function Payments() {
  return (
    <>
      <p className="text-3xl font-semibold tracking-wide text-gray-700">
        Payments
      </p>

      <ActionsContainer />
    </>
  );
}

export default Payments;
