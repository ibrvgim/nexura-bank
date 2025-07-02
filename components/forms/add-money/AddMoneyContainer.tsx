"use client";

import {
  CurrencyItem,
  SendAddMoneyFieldKeys,
  SendAddMoneyType,
} from "@/types/types";
import formatString from "@/utilities/formatString";
import { useEffect, useState } from "react";
import MoneyAmountForm from "../MoneyAmountForm";
import PayForm from "../PayForm";
import { getFutureDate } from "@/utilities/formatDate";

function AddMoneyContainer({
  allCurrencies,
}: {
  allCurrencies: CurrencyItem[];
}) {
  const initialState: SendAddMoneyType = {
    initialAmount: "",
    currency: "usd",
    payingWith: "bank transfer",
    arrivesBy: "",
  };

  const [formStep, setFormStep] = useState("amount");
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    handleFormData("arrivesBy", getFutureDate());
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFormData(key: SendAddMoneyFieldKeys, value: string | boolean) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleCurrency(value: string) {
    setFormData((prev) => ({ ...prev, currency: value }));
  }

  const currentCurrencySymbol = allCurrencies.find(
    (item) =>
      formatString(item.currencyCode) === formatString(formData.currency),
  )?.currencySymbol;

  return (
    <div className="mx-auto w-1/2">
      {formStep === "amount" && (
        <MoneyAmountForm
          allCurrencies={allCurrencies}
          setFormStep={setFormStep}
          formData={formData}
          handleFormData={handleFormData}
          handleCurrency={handleCurrency}
          currentCurrencySymbol={currentCurrencySymbol || "$"}
          handleInputChange={handleInputChange}
          isSendMoneyForm={false}
          nextForm="pay"
        />
      )}

      {formStep === "pay" && (
        <PayForm
          currentCurrencySymbol={currentCurrencySymbol}
          formData={formData}
          setFormStep={setFormStep}
          isSendMoney={false}
        />
      )}
    </div>
  );
}

export default AddMoneyContainer;
