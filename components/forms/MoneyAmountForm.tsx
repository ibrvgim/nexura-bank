"use client";

import AmountInput from "./send-money/AmountInput";
import { MoneyAmountFormType } from "@/types/types";
import FormButton from "./FormButton";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import MoneyAmountConditions from "./MoneyAmountConditions";
import { getFutureDay } from "@/utilities/formatDate";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function MoneyAmountForm({
  allCurrencies,
  setFormStep,
  formData,
  handleFormData,
  currentCurrencySymbol,
  handleInputChange,
  params,
  isSendMoneyForm = true,
}: MoneyAmountFormType) {
  const isDataValid =
    formData.initialAmount && Number(formData.initialAmount) >= 5;

  useEffect(() => {
    const numofDays = isSendMoneyForm ? 3 : 1;
    handleFormData("arrivesBy", days[getFutureDay(numofDays)]);
  }, []);

  function handleFormStep() {
    if (isDataValid) setFormStep("recipient");
    if (!isSendMoneyForm) return;

    if (!params || !params.amountToTransfer || !params.transferCurrency) return;
    else if (
      formData.initialAmount !== params.amountToTransfer ||
      formData.currency !== params.transferCurrency
    )
      redirect(
        `/send-money/?amountToTransfer=${formData.initialAmount}&transferCurrency=${formData.currency}`,
      );
  }

  return (
    <>
      <AmountInput
        label={isSendMoneyForm ? "Amount To Send" : "Amount to Add"}
        name="initialAmount"
        type="text"
        placeholder="0"
        allCurrencies={allCurrencies}
        selectedCurrency={formData.currency}
        setSelectedCurrency={handleFormData}
        value={formData.initialAmount}
        onChange={handleInputChange}
      />

      {formData.initialAmount && Number(formData.initialAmount) >= 5 && (
        <MoneyAmountConditions
          formData={formData}
          currentCurrencySymbol={currentCurrencySymbol}
          isSendMoneyForm={isSendMoneyForm}
        />
      )}

      <FormButton active={isDataValid || false} onClick={handleFormStep}>
        Continue
      </FormButton>
    </>
  );
}

export default MoneyAmountForm;
