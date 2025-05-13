import Link from "next/link";
import ConverterForm from "./ConverterForm";
import {
  CurrencyEuroIcon,
  CurrencyDollarIcon,
  CurrencyPoundIcon,
} from "@heroicons/react/24/solid";

function CurrencyConverterCard() {
  const iconValues = "-mb-3 inline-block size-5";

  return (
    <div className="-mx-20 flex items-center justify-between gap-10 bg-green-400 px-20 py-30">
      <div className="w-1/2">
        <p className="mb-7 text-5xl leading-14 font-extrabold tracking-wide text-gray-800">
          Convert money to other currencies and send across the world{" "}
          <CurrencyEuroIcon className={`-ml-2 ${iconValues}`} />
          <CurrencyDollarIcon className={iconValues} />
          <CurrencyPoundIcon className={iconValues} />
        </p>
        <p className="mb-10 text-lg font-light tracking-wide text-gray-800">
          Check real-time prices for transfers in over 40 currencies using our
          powerful calculator. Whether you are scheduling a payment or putting
          down a deposit, more than half of our transfers arrive in under 20
          seconds. From €50 to $50.000, sending money internationally shouldn’t
          cost the earth. Nexura offers fast, transparent transfers — free from
          hidden fees.
        </p>

        <Link
          href=""
          className="inline-block rounded-full border-3 border-gray-800 bg-gray-800 px-10 py-2 font-medium tracking-wide text-green-400 transition-all duration-500 hover:bg-transparent hover:text-gray-800"
        >
          How to Transfer Money
        </Link>
      </div>

      <ConverterForm />
    </div>
  );
}

export default CurrencyConverterCard;
