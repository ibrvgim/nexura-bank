import AmountInput from "./AmountInput";
import { MoneyAmountFormType } from "@/types/types";
import FormButton from "./FormButton";
import { redirect } from "next/navigation";
import MoneyAmountConditions from "./MoneyAmountConditions";

function MoneyAmountForm({
  allCurrencies,
  setFormStep,
  formData,
  handleFormData,
  currentCurrencySymbol,
  handleInputChange,
  handleCurrency,
  params,
  isSendMoneyForm = true,
  nextForm = "recipient",
}: MoneyAmountFormType) {
  const isDataValid =
    formData.initialAmount && Number(formData.initialAmount) >= 5;

  function handleFormStep() {
    if (isDataValid) setFormStep(nextForm);
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
        setSelectedCurrency={handleCurrency}
        value={formData.initialAmount}
        onChange={handleInputChange}
      />

      {formData.initialAmount && Number(formData.initialAmount) >= 5 && (
        <MoneyAmountConditions
          formData={formData}
          currentCurrencySymbol={currentCurrencySymbol}
          isSendMoneyForm={isSendMoneyForm}
          handleFormData={handleFormData}
        />
      )}

      <FormButton
        title="Continue"
        active={isDataValid || false}
        onClick={handleFormStep}
      />
    </>
  );
}

export default MoneyAmountForm;
