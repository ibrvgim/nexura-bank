import { HTMLInputTypeAttribute } from "react";
import {
  ArrowsRightLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function TransferMoney() {
  return (
    <div className="my-15">
      <p className="mb-8 text-2xl font-medium">Transfer Money</p>

      <div className="rounded-2xl bg-gray-50 p-10">
        <div className="flex gap-2">
          <Input placeholder="Amount to Convert" label="Amount" type="text" />

          <div className="relative flex w-full items-end gap-2">
            <SelectInput label="From" icon="USD.png">
              USD - US Dollar
            </SelectInput>

            <button className="absolute top-[63%] left-1/2 size-5 h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-1 border-gray-300 bg-white">
              <ArrowsRightLeftIcon className="mx-auto size-5" />
            </button>

            <SelectInput label="To" icon="EURO.png">
              EUR - Euro
            </SelectInput>
          </div>
        </div>

        <div className="mt-7 flex justify-between">
          <div>
            <p className="text-sm font-medium text-gray-400">
              20,000.00 US Dollars =
            </p>
            <p className="text-2xl font-semibold text-gray-700">
              17,482.609 Euros
            </p>
          </div>

          <div>
            <button className="mr-2 w-60 cursor-pointer rounded-lg border-2 border-green-400 py-3 font-medium text-green-400 transition-all duration-300 hover:border-green-500 hover:text-green-500">
              Transfer Now
            </button>

            <button className="w-60 cursor-pointer rounded-lg border-2 border-green-400 bg-green-400 py-3 font-medium text-white transition-all duration-300 hover:border-green-500 hover:bg-green-500">
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium tracking-wider text-gray-700 uppercase">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md bg-white px-3 py-4 text-xl font-medium tracking-wide outline-2 outline-gray-300 transition-all duration-500 placeholder:text-sm placeholder:font-light hover:outline-gray-600 focus:outline-3 focus:outline-gray-600"
      />
    </div>
  );
}

function SelectInput({
  children,
  icon,
  label,
}: {
  children: React.ReactNode;
  icon: string;
  label: string;
}) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-xs font-medium tracking-wider text-gray-700 uppercase">
        {label}
      </label>
      <button className="flex w-full items-center rounded-md bg-white px-7 py-4 text-lg font-medium tracking-wide outline-2 outline-gray-300 transition-all duration-500 hover:outline-gray-600 focus:outline-3 focus:outline-gray-600">
        <Image
          src={`/currencies/${icon}`}
          alt="currency icon"
          height={25}
          width={25}
          className="mr-3"
        />
        <span className="text-gray-500">{children}</span>{" "}
        <ChevronDownIcon className="ml-auto size-5" />
      </button>
    </div>
  );
}

export default TransferMoney;
