import formatNumber from "@/utilities/formatNumber";
import PaymentDetailsCard from "./PaymentDetailsCard";
import PaymentItem from "./PaymentItem";
import FormButton from "../FormButton";

function PayForm({ setFormStep }: { setFormStep: (value: string) => void }) {
  return (
    <>
      <PaymentDetailsCard
        title="Recipient Information"
        bottomMargin="mb-8"
        isChangeable
        onClick={() => setFormStep("recipient")}
      >
        <PaymentItem title="Full Name" value="Alex Johnson" />
        <PaymentItem title="Email" value="alex.johnson@gmail.com" />
        <PaymentItem title="SWIFT" value="TRWIBEB17" />
        <PaymentItem title="IBAN" value="DE 12 3456 6789 0123 4567 89" last />
      </PaymentDetailsCard>

      <PaymentDetailsCard
        title="Payment Information"
        bottomMargin="mb-8"
        isChangeable
        onClick={() => setFormStep("amount")}
      >
        <PaymentItem
          title="Transfer Amount"
          value={`$${formatNumber(2000)},00`}
        />
        <PaymentItem title="Paying with" value="Bank Transfer" />
        <PaymentItem title="Arriving by" value="Monday" />
        <PaymentItem title="Fees" value="$0.95" last />
      </PaymentDetailsCard>

      <PaymentDetailsCard>
        <PaymentItem
          title="Total Amount"
          value={`$${formatNumber("1999")},05`}
          last
          isBold
        ></PaymentItem>
      </PaymentDetailsCard>

      <FormButton>Confirm & Pay</FormButton>
    </>
  );
}

export default PayForm;
