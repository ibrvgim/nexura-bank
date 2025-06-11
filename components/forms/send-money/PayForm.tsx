import formatNumber from "@/utilities/formatNumber";
import PaymentDetailsCard from "./PaymentDetailsCard";
import PaymentItem from "./PaymentItem";
import FormButton from "../FormButton";
import { SendAddMoneyType } from "@/types/types";

function PayForm({
  formData,
  setFormStep,
  currentCurrencySymbol,
}: {
  formData: SendAddMoneyType;
  setFormStep: (value: string) => void;
  currentCurrencySymbol: string;
}) {
  const {
    recipientFullname,
    recipientEmail,
    initialAmount,
    payingWith,
    accountSwift,
    accountNumber,
  } = formData;

  const calcFee = Number(initialAmount) * 0.01;

  return (
    <>
      <PaymentDetailsCard
        title="Recipient Information"
        bottomMargin="mb-8"
        isChangeable
        onClick={() => setFormStep("recipient")}
      >
        <PaymentItem title="Full Name" value={recipientFullname} />
        {recipientEmail && <PaymentItem title="Email" value={recipientEmail} />}
        {accountSwift && <PaymentItem title="SWIFT" value={accountSwift} />}
        <PaymentItem title="IBAN / Account Number" value={accountNumber} last />
      </PaymentDetailsCard>

      <PaymentDetailsCard
        title="Payment Information"
        bottomMargin="mb-8"
        isChangeable
        onClick={() => setFormStep("amount")}
      >
        <PaymentItem
          title="Transfer Amount"
          value={`${formatNumber(
            Number(initialAmount),
          )}${currentCurrencySymbol}`}
        />
        <PaymentItem
          title="Paying with"
          value={payingWith}
          style="capitalize"
        />
        <PaymentItem title="Arriving by" value="Monday" />
        <PaymentItem
          title="Fees"
          value={`${calcFee}${currentCurrencySymbol}`}
          last
        />
      </PaymentDetailsCard>

      <PaymentDetailsCard>
        <PaymentItem
          title="Total Amount"
          value={`${formatNumber(
            Number(initialAmount) - calcFee,
          )}${currentCurrencySymbol}`}
          last
          isBold
        ></PaymentItem>
      </PaymentDetailsCard>

      <FormButton>Confirm & Pay</FormButton>
    </>
  );
}

export default PayForm;
