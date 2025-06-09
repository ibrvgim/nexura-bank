"use client";

import { HTMLInputTypeAttribute } from "react";
import SelectCurrency from "./SelectCurrency";
import { CurrencyItem } from "@/types/types";

function AmountInput({
  label,
  name,
  type,
  placeholder,
  allCurrencies,
  selectedCurrency,
  setSelectedCurrency,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  allCurrencies: CurrencyItem[];
  selectedCurrency: string;
  setSelectedCurrency: (value: string) => void;

  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
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
          name={name}
          type={type}
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder={placeholder}
          className="w-full rounded-lg py-4 pr-44 pl-6 text-5xl font-extrabold tracking-wide text-gray-700 outline-2 outline-gray-200 transition-all duration-300 group-hover:outline-gray-500 placeholder:text-gray-600 hover:outline-gray-500 focus:outline-3 focus:outline-gray-500 focus:placeholder:opacity-0"
          value={value}
          onChange={onChange}
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
