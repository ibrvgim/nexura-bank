"use client";

import AmountInput from "./AmountInput";
import { CurrencyItem, SendMoneyType } from "@/types/types";
import ActionCard from "./ActionCard";
import {
  BuildingLibraryIcon,
  ClockIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import FormButton from "../FormButton";
import { redirect } from "next/navigation";

function SendMoneyAmountForm({
  allCurrencies,
  setFormStep,
  formData,
  currentCurrencySymbol,
  handleInputChange,
  handleCurrency,
  params,
}: {
  allCurrencies: CurrencyItem[];
  setFormStep: (value: string) => void;
  formData: SendMoneyType;
  currentCurrencySymbol: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrency: (firstValue: string, secondValue: string) => void;
  params: {
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  };
}) {
  const isDataValid =
    formData.amountToSend && Number(formData.amountToSend) >= 5;

  function handleFormStep() {
    if (isDataValid) setFormStep("recipient");

    if (!params.amountToTransfer || !params.transferCurrency) return;
    else if (
      formData.amountToSend !== params.amountToTransfer ||
      formData.currency !== params.transferCurrency
    )
      redirect(
        `/send-money/?amountToTransfer=${formData.amountToSend}&transferCurrency=${formData.currency}`,
      );
  }

  return (
    <>
      <AmountInput
        label="Amount To Send:"
        name="amountToSend"
        type="text"
        placeholder="0"
        allCurrencies={allCurrencies}
        selectedCurrency={formData.currency}
        setSelectedCurrency={handleCurrency}
        value={formData.amountToSend}
        onChange={handleInputChange}
      />

      {formData.amountToSend && Number(formData.amountToSend) >= 5 && (
        <SendAmountConditions
          formData={formData}
          currentCurrencySymbol={currentCurrencySymbol}
        />
      )}

      <FormButton active={isDataValid || false} onClick={handleFormStep}>
        Continue
      </FormButton>
    </>
  );
}

function SendAmountConditions({
  formData,
  currentCurrencySymbol,
}: {
  formData: SendMoneyType;
  currentCurrencySymbol: string;
}) {
  return (
    <>
      <ul className="mt-12 mb-8 flex flex-col gap-8 border-b border-b-stone-300 pb-8">
        <li>
          <ActionCard
            icon={<BuildingLibraryIcon />}
            title="Paying with"
            pathTitle="Change"
            path=""
            style="capitalize"
          >
            {formData.payingWith}
          </ActionCard>
        </li>

        <li>
          <ActionCard
            icon={<ClockIcon />}
            title="Arrives"
            pathTitle="Schedule"
            path=""
          >
            by Monday
          </ActionCard>
        </li>
      </ul>

      <ActionCard
        icon={<ReceiptPercentIcon />}
        title="Total amount"
        path=""
        amountToSend={formData.amountToSend}
        currencySymbol={currentCurrencySymbol}
      >
        with Fees
      </ActionCard>
    </>
  );
}

export default SendMoneyAmountForm;
