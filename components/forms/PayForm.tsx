import formatNumber from "@/utilities/formatNumber";
import { SendAddMoneyType } from "@/types/types";
import { calculateAmountWithoutFees } from "@/utilities/calculateFees";
import PaymentDetailsCard from "./send-money/PaymentDetailsCard";
import PaymentItem from "./send-money/PaymentItem";
import FormButton from "./FormButton";

function PayForm({
  formData,
  setFormStep,
  currentCurrencySymbol,
  isSendMoney = true,
}: {
  formData: SendAddMoneyType;

  setFormStep: (value: string) => void;
  currentCurrencySymbol?: string;
  isSendMoney?: boolean;
}) {
  const {
    recipientFullname,
    recipientEmail,
    initialAmount,
    payingWith,
    accountSwift,
    accountNumber,
  } = formData;

  const calculateFee =
    Number(initialAmount) -
    (calculateAmountWithoutFees(formData.payingWith, initialAmount) ||
      Number(initialAmount));

  return (
    <>
      {isSendMoney && (
        <PaymentDetailsCard
          title="Recipient Information"
          bottomMargin="mb-8"
          isChangeable
          onClick={() => setFormStep("recipient")}
        >
          <PaymentItem title="Full Name" value={recipientFullname || ""} />
          {recipientEmail && (
            <PaymentItem title="Email" value={recipientEmail} />
          )}
          {accountSwift && <PaymentItem title="SWIFT" value={accountSwift} />}
          <PaymentItem
            title="IBAN / Account Number"
            value={accountNumber || ""}
            last
          />
        </PaymentDetailsCard>
      )}

      <PaymentDetailsCard
        title="Payment Information"
        bottomMargin="mb-8"
        isChangeable
        onClick={() => setFormStep("amount")}
      >
        <PaymentItem
          title={isSendMoney ? "Transfer Amount" : "Amount to Add"}
          value={`${formatNumber(
            Number(initialAmount),
          )}${currentCurrencySymbol || "$"}`}
        />
        <PaymentItem
          title="Paying with"
          value={payingWith}
          style="capitalize"
        />
        <PaymentItem
          title="Arriving by"
          value={formData.arrivesBy}
          style="capitalize"
        />
        <PaymentItem
          title="Fees"
          value={`${calculateFee.toFixed(2)}${currentCurrencySymbol || "$"}`}
          last
        />
      </PaymentDetailsCard>

      <PaymentDetailsCard>
        <PaymentItem
          title="Total Amount"
          value={`${formatNumber(
            (Number(initialAmount) - calculateFee).toFixed(2),
          )}${currentCurrencySymbol}`}
          last
          isBold
        ></PaymentItem>
      </PaymentDetailsCard>

      <FormButton title="Confirm & Pay" />
    </>
  );
}

export default PayForm;
