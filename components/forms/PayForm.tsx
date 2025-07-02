import formatNumber from "@/utilities/formatNumber";
import { SendAddMoneyType } from "@/types/types";
import { calculateAmountWithoutFees } from "@/utilities/calculateFees";
import PaymentDetailsCard from "./send-money/PaymentDetailsCard";
import PaymentItem from "./send-money/PaymentItem";
import FormButton from "./FormButton";
import { useActionState } from "react";
import { handleSendAddMoney } from "@/actions/moneySendAddAction";
import { capitalizeString } from "@/utilities/formatString";
import NoteMessageCard from "../common/NoteMessageCard";

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
  const [error, formAction, isPending] = useActionState(
    handleSendAddMoney,
    null,
  );

  console.log(error);

  const {
    recipientFullname,
    recipientEmail,
    initialAmount,
    currency,
    payingWith,
    isScheduled,
    accountSwift,
    accountNumber,
  } = formData;

  const calculateFee =
    Number(initialAmount) -
    (calculateAmountWithoutFees(formData.payingWith, initialAmount) ||
      Number(initialAmount));

  return (
    <form action={formAction}>
      {isSendMoney && (
        <PaymentDetailsCard
          title="Recipient Information"
          bottomMargin="mb-8"
          isChangeable
          onClick={() => setFormStep("recipient")}
        >
          <PaymentItem
            title="Full Name"
            value={capitalizeString(recipientFullname || "")}
            inputName="recipientFullName"
          />
          {recipientEmail && (
            <PaymentItem
              title="Email"
              value={recipientEmail.toLowerCase()}
              inputName="recipientEmail"
            />
          )}
          {accountSwift && (
            <PaymentItem
              title="SWIFT"
              value={accountSwift.toUpperCase()}
              inputName="recipientAccountSwift"
            />
          )}
          <PaymentItem
            title="IBAN / Account Number"
            value={accountNumber?.toUpperCase() || ""}
            inputName="recipientAccountNumber"
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
          inputName="amount"
        />
        <PaymentItem
          title="Paying with"
          value={payingWith}
          style="capitalize"
          inputName="paymentMethod"
        />
        <PaymentItem
          title="Arriving by"
          value={formData.arrivesBy}
          style="capitalize"
          inputName="arrivesBy"
          isDate
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

      <input
        name="actionType"
        value={isSendMoney ? "withdrawn" : "pawn"}
        hidden
        readOnly
      />
      <input
        name="isScheduled"
        value={isScheduled?.toString()}
        hidden
        readOnly
      />
      <input name="currency" value={currency} hidden readOnly />

      {!isSendMoney && (
        <input
          name="amountWithoutFees"
          value={`${formatNumber(Number(initialAmount) - calculateFee)}${currentCurrencySymbol}`}
          hidden
          readOnly
        />
      )}

      <span className="mt-4 block">
        <NoteMessageCard note="Please be aware that all currencies are converted to Euro." />
      </span>

      <FormButton type="submit" title="Confirm & Pay" isPending={isPending} />
    </form>
  );
}

export default PayForm;
