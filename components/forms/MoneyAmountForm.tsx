import AmountInput from "./AmountInput";
import { MoneyAmountFormType } from "@/types/types";
import FormButton from "./FormButton";
import { redirect } from "next/navigation";
import MoneyAmountConditions from "./MoneyAmountConditions";
import ErrorMessageCard from "../common/ErrorMessageCard";

function MoneyAmountForm({
  currentUserBalance,
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
  const isEnoughMoney = isSendMoneyForm
    ? currentUserBalance > Number(formData.initialAmount)
    : true;

  const isDataValid =
    formData.initialAmount &&
    Number(formData.initialAmount) >= 5 &&
    isEnoughMoney;

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

      {!isEnoughMoney &&
        Number(formData.initialAmount) > 0 &&
        isSendMoneyForm && (
          <span className="mt-4 block">
            <ErrorMessageCard
              error={
                Number(formData.initialAmount) < 5
                  ? `Please note: the minimum send amount is 5 ${formData.currency.toUpperCase()}.`
                  : "Your balance is too low to complete this transaction."
              }
            />
          </span>
        )}

      {!isSendMoneyForm &&
        Number(formData.initialAmount) !== 0 &&
        Number(formData.initialAmount) < 5 && (
          <span className="mt-4 block">
            <ErrorMessageCard
              error={`Please note: the minimum add amount is 5 ${formData.currency.toUpperCase()}.`}
            />
          </span>
        )}

      {isDataValid && (
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
