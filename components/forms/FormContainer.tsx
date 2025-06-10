"use client";

import FormProgressBar from "./FormProgressBar";
import PayForm from "@/components/forms/send-money/PayForm";
import RecipientForm from "@/components/forms/send-money/RecipientForm";
import SendMoneyAmountForm from "@/components/forms/send-money/SendMoneyAmountForm";
import { CurrencyItem, SendMoneyType } from "@/types/types";
import formatString from "@/utilities/formatString";
import { useState } from "react";

function FormContainer({
  allCurrencies,
  params,
}: {
  allCurrencies: CurrencyItem[];
  params: {
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  };
}) {
  const initialState: SendMoneyType = {
    amountToSend: params.amountToTransfer || "",
    currency: params.transferCurrency || "usd",
    payingWith: "bank transfer",
    recipientFullname: "",
    recipientEmail: "",
    accountType: "eu",
    accountNumber: "",
    accountSwift: "",
  };

  const [formStep, setFormStep] = useState("amount");
  const [formData, setFormData] = useState(initialState);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAccountType(value: "eu" | "other") {
    setFormData((prev) => ({
      ...prev,
      recipientFullname: "",
      accountNumber: "",
      accountSwift: "",
      accountType: value,
    }));
  }

  function handleCurrency(currencyCode: string, currencySymbol: string) {
    setFormData((prev) => ({
      ...prev,
      currency: currencyCode,
      currencySymbol,
    }));
  }

  const currentCurrencySymbol = allCurrencies.find(
    (item) =>
      formatString(item.currencyCode) === formatString(formData.currency),
  )?.currencySymbol;

  return (
    <>
      <FormProgressBar
        setFormStep={setFormStep}
        formStep={formStep}
        formData={formData}
        params={params}
      />

      <div className="mx-auto mt-20 w-1/2">
        {formStep === "amount" && (
          <SendMoneyAmountForm
            allCurrencies={allCurrencies}
            setFormStep={setFormStep}
            formData={formData}
            currentCurrencySymbol={currentCurrencySymbol || "$"}
            handleInputChange={handleInputChange}
            handleCurrency={handleCurrency}
            params={params}
          />
        )}

        {formStep === "recipient" && (
          <RecipientForm
            setFormStep={setFormStep}
            formData={formData}
            handleInputChange={handleInputChange}
            handleAccountType={handleAccountType}
          />
        )}

        {formStep === "pay" && (
          <PayForm
            setFormStep={setFormStep}
            formData={formData}
            currentCurrencySymbol={currentCurrencySymbol || "$"}
          />
        )}
      </div>
    </>
  );
}

export default FormContainer;
