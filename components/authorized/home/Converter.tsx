"use client";

import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import SelectInput from "./SelectInput";
import ConverterInput from "./ConverterInput";
import { CurrencyItem, ConverterDataType } from "@/types/types";
import { useState } from "react";
import Link from "next/link";
import formatNumber from "@/utilities/formatNumber";
import formatString from "@/utilities/formatString";

function Converter({
  allCurrencies,
  currencyRate,
  converterData,
  isConverterEmpty,
}: {
  allCurrencies: CurrencyItem[];
  currencyRate: number;
  converterData: ConverterDataType;
  isConverterEmpty: boolean;
}) {
  const [amount, setAmount] = useState(converterData.amount || "1000");

  const [selectValues, setSelectValues] = useState({
    fromValue: converterData.from || "usd",
    toValue: converterData.to || "eur",
  });

  function swapCurrencies() {
    setSelectValues((prev) => ({
      fromValue: prev.toValue,
      toValue: prev.fromValue,
    }));
  }

  function findCurrency(currencyCode: string) {
    return allCurrencies.find(
      (item) => formatString(item.currencyCode) === formatString(currencyCode),
    );
  }

  const fromCurrency = findCurrency(selectValues.fromValue);
  const toCurrency = findCurrency(selectValues.toValue);

  return (
    <div className="rounded-2xl bg-stone-50 p-10">
      <div className="flex gap-2">
        <ConverterInput
          placeholder="Amount to Convert"
          label="Amount"
          type="text"
          value={amount}
          setValue={setAmount}
        />

        <div className="relative flex w-full items-end gap-2">
          <SelectInput
            flag={fromCurrency?.flag || ""}
            content={`${fromCurrency?.currencyCode} - ${fromCurrency?.currencyName}`}
            label="From"
            allCurrencies={allCurrencies}
            selectValues={selectValues}
            setSelectValues={setSelectValues}
          />

          <button
            className="absolute top-2/3 left-1/2 z-20 size-5 h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-gray-300 bg-white"
            aria-label="Swap currencies"
            onClick={swapCurrencies}
          >
            <ArrowsRightLeftIcon className="mx-auto size-5" />
          </button>

          <SelectInput
            flag={toCurrency?.flag || ""}
            content={`${toCurrency?.currencyCode} - ${toCurrency?.currencyName}`}
            label="To"
            allCurrencies={allCurrencies}
            selectValues={selectValues}
            setSelectValues={setSelectValues}
          />
        </div>
      </div>

      <div className="mt-7 flex justify-between gap-5">
        {!isConverterEmpty && (
          <div>
            <p className="text-sm font-medium text-gray-400 capitalize">
              {formatNumber(Number(converterData.amount) || 0)}{" "}
              {findCurrency(converterData.from)?.currencyName} =
            </p>
            <p className="text-2xl font-semibold text-gray-700 capitalize">
              {formatNumber(currencyRate * Number(converterData.amount))}{" "}
              {findCurrency(converterData.to)?.currencyCode}
            </p>
          </div>
        )}

        <div className="ml-auto space-x-2">
          <Button
            type="secondary"
            path={`/send-money/?amountToTransfer=${amount.replace(".", "")}&transferCurrency=${selectValues.fromValue}`}
          >
            Transfer Now
          </Button>
          <Button
            path={`?amount=${amount.replace(".", "")}&from=${formatString(selectValues.fromValue)}&to=${formatString(selectValues.toValue)}`}
          >
            Convert
          </Button>
        </div>
      </div>
    </div>
  );
}

function Button({
  children,
  path,
  type = "primary",
}: {
  children: React.ReactNode;
  path: string;
  type?: "primary" | "secondary";
}) {
  const additionalStyle =
    type === "primary"
      ? "bg-green-400 text-white hover:bg-green-500"
      : "text-green-400 hover:text-green-500";

  return (
    <Link
      href={path}
      className={`inline-block w-60 cursor-pointer rounded-lg border-2 border-green-400 py-3 text-center font-medium transition-all duration-300 hover:border-green-500 ${additionalStyle}`}
      scroll={false}
    >
      {children}
    </Link>
  );
}

export default Converter;
