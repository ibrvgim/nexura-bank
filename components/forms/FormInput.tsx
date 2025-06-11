import { HTMLInputTypeAttribute } from "react";

function FormInput({
  label,
  name,
  type,
  placeholder,
  last = false,
  error,
  value,
  onChange,
  optional = false,
  minValue,
  maxValue,
}: {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  last?: boolean;
  error?: { message?: string | undefined };
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  optional?: boolean;
  minValue?: string | number;
  maxValue?: string | number;
}) {
  const isRequired = error?.message === "required";

  return (
    <div>
      <label
        className="mb-2 inline-block w-full text-sm font-medium tracking-wide text-gray-700"
        htmlFor={name}
      >
        {label}:{" "}
        {!optional && (
          <span className="text-red-500" title="Must be filled in">
            *
          </span>
        )}
        {error?.message && !isRequired && (
          <span className="float-right text-sm text-red-500">
            {error?.message}
          </span>
        )}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-lg px-4 py-3 outline-2 outline-gray-300 transition-all duration-200 placeholder:text-sm placeholder:text-gray-400 hover:outline-gray-600 focus:outline-3 focus:outline-gray-600 ${!last ? "mb-6" : ""}`}
        value={value}
        onChange={onChange}
        min={minValue}
        max={maxValue}
      />
    </div>
  );
}

export default FormInput;
