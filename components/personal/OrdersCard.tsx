import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import PrimaryButton from "../common/PrimaryButton";

function OrdersCard() {
  return (
    <div className="-mx-20 bg-[url(/images/orders-background.webp)] bg-cover bg-center bg-no-repeat py-40">
      <div className="relative mx-20 flex items-center gap-20 rounded-2xl bg-gray-50 px-20 py-16">
        <Image
          src={`/bank-cards/standard.png`}
          alt={`standard bank card image`}
          height={300}
          width={300}
          draggable={false}
          className="absolute -top-24 left-20"
        />

        <ul className="flex w-full flex-1 flex-col gap-5 self-end">
          <Button cardImage="standard.png" cardType="standard" price={7} />
          <Button cardImage="premium.png" cardType="premium" price={14} />
          <Button cardImage="platinum.png" cardType="platinum" price={28} />
        </ul>

        <div className="flex-1">
          <p className="mb-5 text-5xl leading-14 font-extrabold tracking-wider text-gray-700 uppercase">
            Order a <span className="text-green-500">Standard</span> debit card
          </p>
          <p className="mb-5 text-lg font-light tracking-wide text-gray-700">
            Get a debit card to spend online, at the checkout, and to withdraw
            cash in the currency you need right away.
          </p>

          <ul className="text-gray-500 *:mt-2 *:flex *:items-center *:gap-2">
            <Offer>Get 1% cashback on every payment.</Offer>
            <Offer>Withdraw money with 8% commission.</Offer>
            <Offer>Delivery within 7 days.</Offer>
          </ul>

          <div className="mt-10 text-sm uppercase *:px-10">
            <PrimaryButton path="">Order Card Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({
  cardImage,
  cardType,
  price,
}: {
  cardImage: string;
  cardType: string;
  price: number;
}) {
  const isActive = cardType === "standard";

  return (
    <li>
      <button
        className={`flex w-full cursor-pointer items-center gap-4 rounded-md py-3 pr-8 pl-5 outline-2 outline-gray-300 transition-all duration-300 ${isActive ? "bg-green-50 outline-[3px] outline-green-700 *:text-green-700" : "hover:bg-gray-100 hover:outline-gray-500 hover:*:text-gray-700"}`}
      >
        <Image
          src={`/bank-cards/${cardImage}`}
          alt={`${cardType} bank card image`}
          height={70}
          width={70}
          draggable={false}
        />

        <div className="flex w-full justify-between text-gray-500 capitalize">
          <p>{cardType} Debit Card</p>
          <p>€{price},00</p>
        </div>
      </button>
    </li>
  );
}

function Offer({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <ChevronRightIcon className="-ml-1 inline-block size-5" /> {children}
    </li>
  );
}

export default OrdersCard;
