"use client";

import PayForm from "@/components/forms/send-money/PayForm";
import RecipientForm from "@/components/forms/send-money/RecipientForm";
import { CurrencyItem, SendAddMoneyType } from "@/types/types";
import formatString from "@/utilities/formatString";
import { useState } from "react";
import MoneyAmountForm from "../MoneyAmountForm";
import SendMoneyProgressBar from "./SendMoneyProgressBar";

function SendMoneyContainer({
  allCurrencies,
  params,
}: {
  allCurrencies: CurrencyItem[];
  params: {
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  };
}) {
  const initialState: SendAddMoneyType = {
    initialAmount: params.amountToTransfer || "",
    currency: params.transferCurrency || "usd",
    payingWith: "bank transfer",
    arrivesBy: "Tomorrow",
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

  function handleFormData(key: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const currentCurrencySymbol = allCurrencies.find(
    (item) =>
      formatString(item.currencyCode) === formatString(formData.currency),
  )?.currencySymbol;

  return (
    <>
      <SendMoneyProgressBar
        setFormStep={setFormStep}
        formStep={formStep}
        formData={formData}
        params={params}
      />

      <div className="mx-auto mt-20 w-1/2">
        {formStep === "amount" && (
          <MoneyAmountForm
            allCurrencies={allCurrencies}
            setFormStep={setFormStep}
            formData={formData}
            handleFormData={handleFormData}
            currentCurrencySymbol={currentCurrencySymbol || "$"}
            handleInputChange={handleInputChange}
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

export default SendMoneyContainer;
