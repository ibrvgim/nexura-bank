import { HTMLInputTypeAttribute } from "react";

function AuthInput({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm tracking-wider text-gray-800">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border-1 border-gray-500 px-4 py-3 tracking-wide transition-all duration-300 placeholder:text-sm placeholder:text-gray-400 hover:outline-1 focus:outline-2 focus:outline-gray-600"
      />
    </div>
  );
}

export default AuthInput;
