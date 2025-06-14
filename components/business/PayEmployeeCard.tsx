import ConverterForm from "../personal/ConverterForm";
import { PrimaryButton } from "../common/Buttons";
import {
  CurrencyEuroIcon,
  CurrencyDollarIcon,
  CurrencyPoundIcon,
} from "@heroicons/react/24/solid";
import { CurrencyItem } from "@/types/types";

async function PayEmployeeCard({
  params,
  allCurrencies,
  exchangeRate,
}: {
  params: { convertFrom: string; convertTo: string };
  allCurrencies: CurrencyItem[];
  exchangeRate: number;
}) {
  const iconValues = "-mb-3 inline-block size-5";

  return (
    <section className="flex items-center justify-between gap-10 px-20 py-30">
      <div className="w-1/2">
        <p className="mb-7 text-5xl leading-14 font-extrabold tracking-wide text-gray-700">
          Pay with one click and save tons of money
          <CurrencyEuroIcon className={iconValues} />
          <CurrencyDollarIcon className={iconValues} />
          <CurrencyPoundIcon className={iconValues} />
        </p>
        <p className="mb-10 text-lg font-light tracking-wide text-gray-800">
          Make international payments and cut costs effortlessly with Nexura.
          With access to over 100 countries, you can easily pay overseas
          employees, freelancers, or suppliers — all without worrying about
          hidden fees or exchange rates. Nexura ensures transparency and
          savings, so you can focus on growing your business globally with
          confidence.
        </p>

        <div className="*:py-2">
          <PrimaryButton path="">Get a Business Account</PrimaryButton>
        </div>
      </div>

      <ConverterForm
        allCurrencies={allCurrencies}
        exchangeRate={exchangeRate}
        params={params}
        isBusinessPage
      />
    </section>
  );
}

export default PayEmployeeCard;
