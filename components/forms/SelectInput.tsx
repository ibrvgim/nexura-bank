"use client";

import useClickOutside from "@/hooks/useClickOutside";
import formatString from "@/utilities/formatString";
import { useRef, useState } from "react";
// import BasicTooltip from "../common/Tooltip";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function SelectInput({
  label,
  name,
  placeholder,
  error,
  directError,
  data,
  last = false,
  allowSorting = false,
  isContainerInput = false,
  optional = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  error?: { message?: string | undefined };
  directError?: string;
  data: string[];
  last?: boolean;
  allowSorting?: boolean;
  isContainerInput?: boolean;
  optional?: boolean;
}) {
  const isRequired = error?.message === "required";

  const [openList, setOpenList] = useState(false);
  const [value, setValue] = useState(() => {
    if (!placeholder) return data[0];
    else return "";
  });
  const htmlElement = useRef(null);

  const handleCloseList = () => setOpenList(false);
  const handleOpenList = () => setOpenList(true);

  useClickOutside(htmlElement, handleCloseList, openList);

  function handleValue(inputValue: string) {
    setValue(inputValue);
    handleCloseList();
  }

  let dataBySearch = data.filter((item) =>
    isContainerInput ? formatString(item).includes(formatString(value)) : item,
  );

  if (allowSorting) dataBySearch = dataBySearch.sort();

  return (
    <div className="relative" ref={htmlElement}>
      {!isContainerInput && <input name={name} value={value} hidden readOnly />}
      <label
        className="mb-2 inline-block w-full text-start text-sm font-medium tracking-wide text-gray-700"
        htmlFor={name}
      >
        {label}:{" "}
        {!optional && (
          <span className="text-red-500">
            *{/* <BasicTooltip title="Must be filled in">*</BasicTooltip> */}
          </span>
        )}
        {(error?.message || directError) && (
          <span className="float-right text-sm text-red-500">
            {isRequired ? "Must be filled in" : error?.message || directError}
          </span>
        )}
      </label>

      {isContainerInput ? (
        <input
          id={name}
          name={name}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full rounded-lg px-4 py-3 outline-2 outline-gray-300 transition-all duration-200 placeholder:text-sm placeholder:tracking-wide placeholder:text-gray-400 hover:outline-gray-600 focus:outline-3 focus:outline-gray-600 ${!last ? "mb-6" : ""}`}
          onClick={() => {
            handleOpenList();
            setValue("");
          }}
        />
      ) : (
        <button
          type="button"
          className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-gray-700 outline-2 outline-gray-300 transition-all duration-200 hover:outline-gray-600 ${!last ? "mb-6" : ""}`}
          onClick={handleOpenList}
        >
          {value || placeholder}

          <ChevronDownIcon className="inline-block size-5 text-gray-600" />
        </button>
      )}

      {openList && dataBySearch.length >= 1 && (
        <ul className="absolute top-22 right-0 z-10 max-h-48 w-full overflow-auto rounded-md bg-white px-2 py-2 shadow-md outline-2 outline-gray-200">
          {dataBySearch.map((item) => (
            <Option key={item} value={item} handleValue={handleValue} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Option({
  value,
  handleValue,
}: {
  value: string;
  handleValue: (value: string) => void;
}) {
  return (
    <li>
      <button
        type="button"
        className="w-full cursor-pointer rounded-md px-3 py-2 text-start text-gray-400 capitalize hover:bg-gray-100 hover:text-gray-600"
        onClick={() => handleValue(value)}
      >
        {value}
      </button>
    </li>
  );
}

export default SelectInput;
