import { SendAddMoneyFieldKeys } from "@/types/types";
import ActionLink from "../common/ActionLink";
import {
  BuildingLibraryIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { CREDIT_CARD_FEE, DEBIT_CARD_FEE } from "@/constant/constants";

function PaymentOptions({
  isSendMoney = true,
  handleFormData,
  handleClose,
  currencySymbol,
}: {
  isSendMoney?: boolean;
  handleFormData: (key: SendAddMoneyFieldKeys, value: string) => void;
  handleClose: () => void;
  currencySymbol: string;
}) {
  function handlePaymentMethod(key: SendAddMoneyFieldKeys, value: string) {
    handleFormData(key, value);
    handleClose();
  }

  return (
    <div className="">
      <p className="mx-auto mb-8 w-3/4 text-center text-4xl font-extrabold uppercase">
        How would you like to pay?
      </p>

      <p className="mb-4 border-b border-gray-400 pb-2 text-sm text-gray-500">
        Payment methods:
      </p>
      <ul className="flex flex-col gap-3">
        <ActionLink
          title="Bank Transfer"
          icon={<BuildingLibraryIcon />}
          path=""
          isTitleBold
          onClick={() => handlePaymentMethod("payingWith", "bank transfer")}
        >
          {isSendMoney
            ? "Transfer the money to others using a bank account."
            : "Manually add the money to Nexura using a bank account."}
        </ActionLink>

        <ActionLink
          title="Debit Card"
          icon={<CreditCardIcon />}
          path=""
          isTitleBold
          onClick={() => handlePaymentMethod("payingWith", "debit card")}
        >
          Use Visa, MasterCard or Maestro to {isSendMoney ? "send" : "add"}{" "}
          money -{" "}
          <strong>
            {DEBIT_CARD_FEE.toFixed(2)}
            {currencySymbol}
          </strong>{" "}
          fee.
        </ActionLink>

        <ActionLink
          title="Credit Card"
          icon={<CreditCardIcon />}
          path=""
          isTitleBold
          onClick={() => handlePaymentMethod("payingWith", "credit card")}
        >
          Use Visa, MasterCard or Maestro to {isSendMoney ? "send" : "add"}{" "}
          money -{" "}
          <strong>
            {CREDIT_CARD_FEE.toFixed(2)}
            {currencySymbol}
          </strong>{" "}
          fee.
        </ActionLink>
      </ul>
    </div>
  );
}

export default PaymentOptions;
