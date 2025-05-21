import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "../common/Buttons";

function ConverterForm() {
  return (
    <form className="flex w-[35%] flex-col gap-5 rounded-2xl bg-gray-50 px-8 py-8 shadow-xl">
      <div className="text-gray-600">
        <LockClosedIcon className="mx-auto mb-2 size-6" />
        <p className="text-center text-xs tracking-wide uppercase">
          Send money with secure encryption
        </p>
      </div>

      <Input label="Send:" placeholder="Amount to Send..." type="text" />
      <Input label="Receive:" placeholder="Amount to Receive..." type="text" />

      <div>
        <label className="mb-1 block text-xs font-medium tracking-wider text-gray-700 uppercase">
          Paying with:
        </label>

        <button className="flex w-full cursor-pointer items-center justify-between rounded-md border-2 border-gray-400 px-4 py-3 text-sm tracking-wide text-gray-600 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
          Bank Transfer
          <span className="flex items-center tracking-wide">
            Change <ChevronRightIcon className="size-4" />
          </span>
        </button>
      </div>

      <div className="rounded-md border-2 border-gray-200 p-3 text-sm font-light tracking-wide text-gray-600">
        <div className="pb-2">
          <Fee feeName="Bank Transfer" amount={0} />
          <Fee feeName="Nexura" amount={6.21} />
        </div>

        <p className="border-t-2 border-t-gray-200 pt-2 font-medium text-gray-700">
          Total Fees (0.62%) <span className="float-right">6.21 EUR</span>
        </p>
      </div>

      <p className="text-sm text-gray-500">
        You are able to save up to <span className="font-medium">€45.00</span>{" "}
        with us.
      </p>

      <div className="mt-2 flex gap-2 text-center text-xs uppercase *:w-full *:py-2">
        <SecondaryButton path="">Compare Fees</SecondaryButton>
        <PrimaryButton path="">Send Money</PrimaryButton>
      </div>
    </form>
  );
}

function Input({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium tracking-wider text-gray-700 uppercase">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md px-3 py-3 text-xl font-medium tracking-wide outline-2 outline-gray-300 transition-all duration-500 placeholder:text-sm placeholder:font-light hover:outline-gray-600 focus:outline-3 focus:outline-gray-600"
      />
    </div>
  );
}

function Fee({ feeName, amount }: { feeName: string; amount: number }) {
  return (
    <p>
      {feeName} Fee <span className="float-right">{amount} EUR</span>
    </p>
  );
}

export default ConverterForm;
