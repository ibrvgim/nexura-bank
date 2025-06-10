import FlagImageContainer from "@/components/common/FlagImageContainer";
import useClickOutside from "@/hooks/useClickOutside";
import { CurrencyItem } from "@/types/types";
import formatString from "@/utilities/formatString";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

interface SelectInputProps {
  flag: string;
  content: string;
  label: string;
  allCurrencies: CurrencyItem[];
  selectValues: { fromValue: string; toValue: string };
  setSelectValues: React.Dispatch<
    React.SetStateAction<{ fromValue: string; toValue: string }>
  >;
}

function SelectInput({
  flag,
  content,
  label,
  allCurrencies,
  selectValues,
  setSelectValues,
}: SelectInputProps) {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const htmlElement = useRef<HTMLDivElement>(null);
  const inputElement = useRef<HTMLInputElement>(null);

  useClickOutside(htmlElement, () => setToggleSelect(false), toggleSelect);

  useEffect(() => {
    if (toggleSelect && inputElement.current) inputElement.current.focus();
  }, [toggleSelect]);

  function cleanSearch() {
    if (searchValue) setSearchValue("");
  }

  function handleToggleSelect() {
    setToggleSelect((prev) => !prev);
    cleanSearch();
  }

  function handleValue(value: string) {
    setSelectValues((prev) => ({
      ...prev,
      [formatString(label) === "from" ? "fromValue" : "toValue"]: value,
    }));
    setToggleSelect(false);
    cleanSearch();
  }

  const currenciesBySearch = allCurrencies.filter(
    (item) =>
      (formatString(item.currencyCode).includes(formatString(searchValue)) ||
        formatString(item.currencyName).includes(formatString(searchValue))) &&
      formatString(item.currencyCode) !==
        formatString(selectValues.fromValue) &&
      formatString(item.currencyCode) !== formatString(selectValues.toValue),
  );

  return (
    <div ref={htmlElement} className="relative w-full">
      <label className="mb-2 inline-block text-xs font-medium tracking-wider text-gray-700 uppercase">
        {label}:
      </label>

      <button
        className="flex w-full items-center rounded-md bg-white px-7 py-4 text-lg font-medium tracking-wide outline-2 outline-gray-300 transition-all duration-300 hover:outline-gray-600"
        onClick={handleToggleSelect}
        title={content}
        aria-haspopup="listbox"
        aria-expanded={toggleSelect}
        aria-controls="currency-options"
      >
        <FlagImageContainer url={flag} alt="flag icon" size={35} style="mr-3" />
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
        <div className="absolute top-24 right-0 z-10 w-full rounded-md bg-white shadow-md outline-2 outline-gray-200">
          <div className="relative px-3">
            <span className="absolute top-1/2 left-6 inline-block -translate-y-1/2 text-gray-700 *:size-4.5">
              <MagnifyingGlassIcon />
            </span>

            <input
              ref={inputElement}
              type="text"
              placeholder="Search by currency"
              className="my-4 w-full rounded-md py-2 pr-3 pl-10 outline-2 outline-gray-300 transition-colors duration-300 placeholder:text-sm placeholder:text-gray-500 hover:outline-gray-400 focus:outline-gray-500"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            {searchValue && (
              <button
                type="button"
                className="absolute top-1/2 right-6 inline-block -translate-y-1/2 cursor-pointer rounded-full p-0.5 text-gray-800 transition-colors duration-200 *:size-4 hover:bg-stone-200"
                onClick={cleanSearch}
              >
                <XMarkIcon />
              </button>
            )}
          </div>

          {currenciesBySearch.length > 0 && (
            <p className="mx-2 border-b border-b-gray-300 px-2 pb-2 text-sm text-gray-500">
              {searchValue ? "Search Results:" : "All Currencies:"}
            </p>
          )}

          <ul
            id="currency-options"
            role="listbox"
            className="max-h-60 overflow-y-auto py-2"
          >
            {currenciesBySearch.length > 0 ? (
              currenciesBySearch.map((item) => (
                <Option
                  key={item.currencyCode}
                  flag={item.flag}
                  code={item.currencyCode}
                  onClick={handleValue}
                >
                  {item.currencyName}
                </Option>
              ))
            ) : (
              <p className="px-4 pb-2 text-sm text-gray-500">
                No results found.
              </p>
            )}
          </ul>
        </div>
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
    <li className="px-3">
      <button
        className="flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-3 text-start text-sm capitalize hover:bg-gray-100"
        onClick={() => onClick(code)}
      >
        <FlagImageContainer url={flag} alt={`${code} flag`} />
        {code} {children}
      </button>
    </li>
  );
}

export default SelectInput;
