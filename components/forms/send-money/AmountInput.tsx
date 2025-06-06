"use client";

import formatNumber from "@/utilities/formatNumber";
import { HTMLInputTypeAttribute, useState } from "react";
import SelectCurrency from "./SelectCurrency";
import { CurrencyItem } from "@/types/types";

function AmountInput({
  label,
  name,
  type,
  placeholder,
  allCurrencies,
}: {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  allCurrencies: CurrencyItem[];
}) {
  const [selectedCurrency, setSelectedCurrency] = useState("eur");

  return (
    <>
      <label
        className="mb-3 inline-block text-xs font-semibold tracking-wide text-gray-600 uppercase"
        htmlFor={name}
      >
        {label}
      </label>

      <div className="group relative">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          defaultValue={formatNumber(2000)}
          className="w-full rounded-lg py-4 pr-44 pl-6 text-5xl font-extrabold tracking-wide text-gray-700 outline-2 outline-gray-200 transition-all duration-300 group-hover:outline-gray-500 placeholder:text-2xl hover:outline-gray-500 focus:outline-3 focus:outline-gray-500"
        />

        <SelectCurrency
          allCurrencies={allCurrencies}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      </div>
    </>
  );
}

export default AmountInput;
