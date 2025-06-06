import { HTMLInputTypeAttribute } from "react";

function ConverterInput({
  label,
  placeholder,
  type,
  value,
  setValue,
}: {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 inline-block text-xs font-medium tracking-wider text-gray-700 uppercase">
        {label}:
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md bg-white px-3 py-4 text-xl font-medium tracking-wide outline-2 outline-gray-300 transition-all duration-500 placeholder:text-sm placeholder:font-light hover:outline-gray-600 focus:outline-3 focus:outline-gray-600"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default ConverterInput;
