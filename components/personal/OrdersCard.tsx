import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { PrimaryButton } from "../common/Buttons";
import Link from "next/link";

const cards = [
  {
    type: "standard",
    price: 7,
    offerings: [
      "No cashback.",
      "Withdraw money with 8% commission.",
      "Delivery within 7 days.",
    ],
  },

  {
    type: "premium",
    price: 14,
    offerings: [
      "Get 1% cashback on every payment.",
      "Withdraw money with 6% commission.",
      "Delivery within 5 days.",
    ],
  },

  {
    type: "platinum",
    price: 28,
    offerings: [
      "Get 3% cashback on every payment.",
      "Withdraw money with 4% commission.",
      "Delivery within 3 days.",
    ],
  },
];

function OrdersCard({ urlCardType }: { urlCardType: string }) {
  return (
    <section className="-mx-20 bg-[url(/images/orders-background.webp)] bg-cover bg-center bg-no-repeat py-40">
      <div className="relative mx-20 flex items-center gap-20 rounded-2xl bg-gray-50 px-20 py-16">
        <Image
          src={`/bank-cards/${urlCardType}.png`}
          alt={`standard bank card image`}
          height={300}
          width={300}
          draggable={false}
          className="absolute -top-24 left-20"
        />

        <ul className="flex w-full flex-1 flex-col gap-5 self-end pt-15">
          {cards.map((card, index) => (
            <Button
              key={index}
              cardImage={`${card.type}.png`}
              cardType={card.type}
              price={card.price}
              urlCardType={urlCardType}
            />
          ))}
        </ul>

        <div className="flex-1">
          <p className="mb-5 text-5xl leading-14 font-extrabold tracking-wider text-gray-700 uppercase">
            Order a <span className="text-green-500">{urlCardType}</span> debit
            card
          </p>
          <p className="mb-5 text-lg font-light tracking-wide text-gray-700">
            Get a debit card to spend online, at the checkout, and to withdraw
            cash in the currency you need right away.
          </p>

          <ul className="text-gray-500 *:mt-2 *:flex *:items-center *:gap-2">
            {cards
              .find((card) => card.type === urlCardType)
              ?.offerings.map((item, index) => (
                <Offer key={index}>{item}</Offer>
              ))}
          </ul>

          <div className="mt-10 text-sm uppercase *:px-10 *:py-2">
            <PrimaryButton path={`/order-card/?type=${urlCardType}`}>
              Order Card Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Button({
  cardImage,
  cardType,
  price,
  urlCardType,
}: {
  cardImage: string;
  cardType: string;
  price: number;
  urlCardType: string;
}) {
  const isActive = cardType === urlCardType;

  return (
    <li>
      <Link
        href={`?cardType=${cardType}`}
        scroll={false}
        className={`flex w-full cursor-pointer items-center gap-4 rounded-md py-3 pr-8 pl-5 outline-2 outline-gray-300 transition-all duration-300 ${isActive ? "bg-green-50 outline-[3px] outline-green-700 *:text-green-700" : "hover:bg-gray-100 hover:outline-gray-500 hover:*:text-gray-700"}`}
      >
        <Image
          src={`/bank-cards/${cardImage}`}
          alt={`${cardType} bank card image`}
          height={80}
          width={80}
          draggable={false}
        />

        <div className="flex w-full justify-between text-gray-500 capitalize">
          <p>{cardType} Debit Card</p>
          <p>€{price},00</p>
        </div>
      </Link>
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
