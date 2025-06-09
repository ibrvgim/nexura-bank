import { HTMLInputTypeAttribute } from "react";

function FormInput({
  label,
  name,
  type,
  placeholder,
  last = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  last?: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <label className="mb-2 inline-block text-sm font-medium tracking-wide text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-lg px-4 py-3 outline-2 outline-gray-300 transition-all duration-200 placeholder:text-sm placeholder:text-gray-400 hover:outline-gray-600 focus:outline-3 focus:outline-gray-600 ${!last ? "mb-6" : ""}`}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FormInput;
