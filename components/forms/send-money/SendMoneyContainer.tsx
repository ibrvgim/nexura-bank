"use client";

import RecipientForm from "@/components/forms/send-money/RecipientForm";
import { CurrencyItem, SendAddMoneyType } from "@/types/types";
import formatString from "@/utilities/formatString";
import { useEffect, useState } from "react";
import MoneyAmountForm from "../MoneyAmountForm";
import SendMoneyProgressBar from "./SendMoneyProgressBar";
import PayForm from "../PayForm";
import { getFutureDate } from "@/utilities/formatDate";

function SendMoneyContainer({
  currentUserBalance,
  allCurrencies,
  params,
}: {
  currentUserBalance: number;
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
    arrivesBy: "",
    isScheduled: false,
    recipientFullname: "",
    recipientEmail: "",
    accountType: "eu",
    accountNumber: "",
    accountSwift: "",
  };

  const [formStep, setFormStep] = useState("amount");
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    handleFormData("arrivesBy", getFutureDate());
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  function handleFormData(key: string, value: string | boolean) {
    setFormData((prev) => ({
      ...prev,
      [key]: typeof value === "string" ? value.toLowerCase() : value,
    }));
  }

  function handleCurrency(value: string) {
    setFormData((prev) => ({
      ...prev,
      currency: value.toLowerCase(),
    }));
  }

  const currentCurrencySymbol = allCurrencies.find(
    (item) =>
      formatString(item.currencyCode) === formatString(formData.currency),
  )?.currencySymbol;

  return (
    <>
      <SendMoneyProgressBar
        currentUserBalance={currentUserBalance}
        setFormStep={setFormStep}
        formStep={formStep}
        formData={formData}
        params={params}
      />

      <div className="mx-auto mt-20 w-1/2">
        {formStep === "amount" && (
          <MoneyAmountForm
            currentUserBalance={currentUserBalance}
            allCurrencies={allCurrencies}
            setFormStep={setFormStep}
            formData={formData}
            handleFormData={handleFormData}
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

export default SendMoneyContainer;
