import { CurrencyItem } from "@/types/types";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface SelectInputProps {
  flag: string;
  content: string;
  label: string;
  allCurrencies: CurrencyItem[];
  setSelectValues: React.Dispatch<
    React.SetStateAction<{ fromValue: string; toValue: string }>
  >;
}

function SelectInput({
  flag,
  content,
  label,
  allCurrencies,
  setSelectValues,
}: SelectInputProps) {
  const [toggleSelect, setToggleSelect] = useState(false);

  function handleToggleSelect() {
    setToggleSelect((prev) => !prev);
  }

  function handleValue(value: string) {
    setSelectValues((prev) => ({
      ...prev,
      [label.toLowerCase() === "from" ? "fromValue" : "toValue"]: value,
    }));
    setToggleSelect(false);
  }

  return (
    <div className="relative w-full">
      <label className="mb-2 inline-block text-xs font-medium tracking-wider text-gray-700 uppercase">
        {label}
      </label>

      <button
        className="flex w-full items-center rounded-md bg-white px-7 py-4 text-lg font-medium tracking-wide outline-2 outline-gray-300 transition-all duration-300 hover:outline-gray-600"
        onClick={handleToggleSelect}
        title={content}
        aria-haspopup="listbox"
        aria-expanded={toggleSelect}
        aria-controls="currency-options"
      >
        <span className="mr-3 text-2xl leading-0">{flag}</span>
        <span className="text-gray-500 capitalize">
          {content.length > 15 ? `${content.slice(0, 15)}...` : content}
        </span>{" "}
        {toggleSelect ? (
          <XMarkIcon className="ml-auto size-5 cursor-pointer" />
        ) : (
          <ChevronDownIcon className="ml-auto size-5 cursor-pointer" />
        )}
      </button>

      {toggleSelect && (
        <ul
          id="currency-options"
          role="listbox"
          className="absolute top-24 z-10 h-60 w-full overflow-y-auto rounded-md bg-white py-2 shadow-md outline-2 outline-gray-300"
        >
          {allCurrencies.map((item) => (
            <Option
              key={item.currencyCode}
              flag={item.flag}
              code={item.currencyCode}
              onClick={handleValue}
            >
              {item.currencyName}
            </Option>
          ))}
        </ul>
      )}
    </div>
  );
}

function Option({
  children,
  code,
  flag,
  onClick,
}: {
  children: React.ReactNode;
  code: string;
  flag: string;
  onClick: (value: string) => void;
}) {
  return (
    <li className="px-2">
      <button
        className="flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-3 text-start text-sm capitalize hover:bg-gray-100"
        onClick={() => onClick(code)}
      >
        <span className="text-lg leading-0">{flag}</span>
        {code} {children}
      </button>
    </li>
  );
}

export default SelectInput;
