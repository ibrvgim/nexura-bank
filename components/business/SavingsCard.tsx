import Image from "next/image";
import { PrimaryButton } from "../common/Buttons";

function SavingsCard() {
  return (
    <section className="-mx-20 flex items-center gap-10 bg-gray-100 px-20 py-36">
      <div className="relative h-80 flex-1">
        <Image
          src="/illustrations/credit-card.svg"
          alt="piggybox illustration"
          fill
          className="object-contain"
          draggable={false}
        />
      </div>

      <div className="flex-1">
        <p className="text-5xl leading-14 font-extrabold tracking-wide text-gray-700">
          Manage Payments with Nexura Business
        </p>
        <p className="mt-7 mb-10 text-lg font-light tracking-wide text-gray-800">
          Nexura Business gives you local account details in multiple
          currencies, making it simple for your customers to pay you — quickly
          and at no cost to them. Share these local details and receive payments
          just like a local business would. Additionally, 80% of transfers are
          instant or arrive within an hour, helping you keep your cash flow
          moving smoothly.
        </p>

        <div className="*:py-2">
          <PrimaryButton path="">Get a Business Account</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default SavingsCard;
