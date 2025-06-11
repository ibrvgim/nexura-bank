"use client";

import {
  CurrencyItem,
  SendAddMoneyFieldKeys,
  SendAddMoneyType,
} from "@/types/types";
import formatString from "@/utilities/formatString";
import { useState } from "react";
import MoneyAmountForm from "../MoneyAmountForm";

function AddMoneyContainer({
  allCurrencies,
}: {
  allCurrencies: CurrencyItem[];
}) {
  const initialState: Pick<
    SendAddMoneyType,
    "initialAmount" | "currency" | "payingWith" | "arrivesBy"
  > = {
    initialAmount: "",
    currency: "usd",
    payingWith: "bank transfer",
    arrivesBy: "Tomorrow",
  };

  const [formStep, setFormStep] = useState("amount");
  console.log(formStep);
  const [formData, setFormData] = useState(initialState);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFormData(key: SendAddMoneyFieldKeys, value: string) {
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
    <div className="mx-auto w-1/2">
      <MoneyAmountForm
        allCurrencies={allCurrencies}
        setFormStep={setFormStep}
        formData={formData}
        handleFormData={handleFormData}
        currentCurrencySymbol={currentCurrencySymbol || "$"}
        handleInputChange={handleInputChange}
        isSendMoneyForm={false}
      />
    </div>
  );
}

export default AddMoneyContainer;
