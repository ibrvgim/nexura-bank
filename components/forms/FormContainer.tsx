"use client";

import FormProgressBar from "./FormProgressBar";
import PayForm from "@/components/forms/send-money/PayForm";
import RecipientForm from "@/components/forms/send-money/RecipientForm";
import SendMoneyAmountForm from "@/components/forms/send-money/SendMoneyAmountForm";
import { CurrencyItem, SendMoneyType } from "@/types/types";
import { useState } from "react";

const initialState: SendMoneyType = {
  amountToSend: "",
  currency: "eur",
  payingWith: "bank transfer",
  recipientFullname: "",
  recipientEmail: "",
  accountType: "eu",
  accountNumber: "",
  accountSwift: "",
};

function FormContainer({ allCurrencies }: { allCurrencies: CurrencyItem[] }) {
  const [formStep, setFormStep] = useState("amount");
  const [formData, setFormData] = useState(initialState);

  console.log(formData);

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

  function handleCurrency(value: string) {
    setFormData((prev) => ({
      ...prev,
      currency: value,
    }));
  }

  return (
    <>
      <FormProgressBar
        setFormStep={setFormStep}
        formStep={formStep}
        formData={formData}
      />

      <div className="mx-auto mt-20 w-1/2">
        {formStep === "amount" && (
          <SendMoneyAmountForm
            allCurrencies={allCurrencies}
            setFormStep={setFormStep}
            formData={formData}
            handleInputChange={handleInputChange}
            handleCurrency={handleCurrency}
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

        {formStep === "pay" && <PayForm setFormStep={setFormStep} />}
      </div>
    </>
  );
}

export default FormContainer;
