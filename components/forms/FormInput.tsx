import { HTMLInputTypeAttribute } from "react";
import BasicTooltip from "../common/Tooltip";

function FormInput({
  label,
  name,
  type,
  placeholder,
  error,
  directErros,
  value,
  onChange,
  minValue,
  maxValue,
  optional = false,
  last = false,
  readonly = false,
}: {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  last?: boolean;
  error?: { message?: string | undefined };
  directErros?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  optional?: boolean;
  minValue?: string | number;
  maxValue?: string | number;
  readonly?: boolean;
}) {
  const isRequired = error?.message === "required";

  return (
    <div>
      <label
        className="mb-2 inline-block w-full text-start text-sm font-medium tracking-wide text-gray-700"
        htmlFor={name}
      >
        {label}:{" "}
        {!optional && (
          <span className="text-red-500">
            <BasicTooltip title="Must be filled in">*</BasicTooltip>
          </span>
        )}
        {(error?.message || directErros) && !isRequired && (
          <span className="float-right text-sm text-red-500">
            {error?.message || directErros}
          </span>
        )}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-lg px-4 py-3 outline-2 outline-gray-300 transition-all duration-200 placeholder:text-sm placeholder:tracking-wide placeholder:text-gray-400 hover:outline-gray-600 focus:outline-3 focus:outline-gray-600 ${!last ? "mb-6" : ""}`}
        value={value}
        onChange={onChange}
        min={minValue}
        max={maxValue}
        readOnly={readonly}
      />
    </div>
  );
}

export default FormInput;
