import { HTMLInputTypeAttribute } from "react";

function FormInput({
  label,
  type,
  placeholder,
  last = false,
}: {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  last?: boolean;
}) {
  return (
    <>
      <label className="mb-2 inline-block text-sm font-medium tracking-wide text-gray-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg px-4 py-3 outline-2 outline-gray-300 transition-all duration-200 placeholder:text-sm placeholder:text-gray-400 hover:outline-gray-600 focus:outline-3 focus:outline-gray-600 ${!last ? "mb-6" : ""}`}
      />
    </>
  );
}

export default FormInput;
