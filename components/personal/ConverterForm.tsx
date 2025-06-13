"use client";

import { LockClosedIcon } from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "../common/Buttons";
import AmountInput from "../forms/AmountInput";
import { useState } from "react";
import { CurrencyItem, SendAddMoneyFieldKeys } from "@/types/types";
import { useRouter } from "next/navigation";

import formatString from "@/utilities/formatString";
import PaymentsFeesContainer from "./PaymentsFeesContainer";

function ConverterForm({
  allCurrencies,
  exchangeRate,
  params,
}: {
  allCurrencies: CurrencyItem[];
  exchangeRate: number;
  params: { convertFrom: string; convertTo: string };
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    sendAmount: "1000",
    sendCurrency: params?.convertFrom || "usd",
    receiveCurrency: params?.convertTo || "eur",
    payingWith: "bank transfer",
  });

  if (!allCurrencies) return;

  const currentCurrencySymbol = allCurrencies.find(
    (item) =>
      formatString(item.currencyCode) === formatString(formData.sendCurrency),
  )?.currencySymbol;

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function pushDatatoUrl(fromValue: string, toValue: string) {
    router.push(`/?convertFrom=${fromValue}&convertTo=${toValue}`, {
      scroll: false,
    });
  }

  function handleSendCurrency(value: string) {
    setFormData((prev) => ({ ...prev, sendCurrency: value.toLowerCase() }));
    pushDatatoUrl(value.toLowerCase(), formData.receiveCurrency);
  }

  function handleReceiveCurrency(value: string) {
    setFormData((prev) => ({ ...prev, receiveCurrency: value.toLowerCase() }));
    pushDatatoUrl(formData.sendCurrency, value.toLowerCase());
  }

  function handleFormData(key: SendAddMoneyFieldKeys, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="flex w-[35%] flex-col gap-5 rounded-2xl bg-white px-8 py-8 shadow-xl">
      <div className="text-gray-600">
        <LockClosedIcon className="mx-auto mb-2 size-6" />
        <p className="text-center text-xs tracking-wide uppercase">
          Send money with secure encryption
        </p>
      </div>

      <AmountInput
        label="Send"
        name="sendAmount"
        type="text"
        placeholder="0"
        allCurrencies={allCurrencies}
        selectedCurrency={formData.sendCurrency}
        setSelectedCurrency={handleSendCurrency}
        value={formData.sendAmount}
        onChange={handleInputChange}
        smallStyle
      />

      <AmountInput
        label="Receive"
        name="receiveAmount"
        type="text"
        placeholder="0"
        allCurrencies={allCurrencies}
        selectedCurrency={formData.receiveCurrency}
        setSelectedCurrency={handleReceiveCurrency}
        smallStyle
        readOnly
        defaultValue={(Number(formData.sendAmount) * exchangeRate).toFixed(2)}
      />

      {formData.sendAmount && (
        <PaymentsFeesContainer
          currentCurrencySymbol={currentCurrencySymbol || "$"}
          handleFormData={handleFormData}
          formData={formData}
        />
      )}

      <div className="mt-2 flex gap-2 text-center text-xs uppercase *:w-full *:py-2">
        <SecondaryButton path="">Compare Fees</SecondaryButton>
        <PrimaryButton
          path={`/send-money/?amountToTransfer=${formData.sendAmount.replace(".", "")}&transferCurrency=${formData.sendCurrency}`}
        >
          Send Money
        </PrimaryButton>
      </div>
    </div>
  );
}

export default ConverterForm;
