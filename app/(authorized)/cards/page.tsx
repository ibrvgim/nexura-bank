import { PrimaryButton } from "@/components/common/Buttons";
import { DebitCardType } from "@/types/types";
import Image from "next/image";

const cards = [
  {
    image: "standard.png",
    type: "standard",
    deliveryTime: "7",
    price: 7,
    offerings: [
      {
        title: "Withdraw from ATM anywhere",
        description:
          "You can make 2 free ATM withdrawals up to a total of 200 EUR each month.",
      },

      {
        title: "Spend easily, everywhere you go",
        description:
          "And if you don`'t have the right currency, we`'ll do the conversion for you.",
      },

      {
        title: "Pay with Apple Pay or Google Pay",
        description:
          "Add the card to your mobile wallets and spend instantly even before it arrives.",
      },
    ],
  },

  {
    image: "premium.png",
    type: "premium",
    deliveryTime: "5",
    price: 14,
    offerings: [
      {
        title: "Withdraw from ATM anywhere",
        description:
          "You can make 2 free ATM withdrawals up to a total of 200 EUR each month.",
      },

      {
        title: "Spend easily, everywhere you go",
        description:
          "And if you don`'t have the right currency, we`'ll do the conversion for you.",
      },

      {
        title: "Pay with Apple Pay or Google Pay",
        description:
          "Add the card to your mobile wallets and spend instantly even before it arrives.",
      },
    ],
  },

  {
    image: "platinum.png",
    type: "platinum",
    deliveryTime: "3",
    price: 28,
    offerings: [
      {
        title: "Withdraw from ATM anywhere",
        description:
          "You can make 2 free ATM withdrawals up to a total of 200 EUR each month.",
      },

      {
        title: "Spend easily, everywhere you go",
        description:
          "And if you don`'t have the right currency, we`'ll do the conversion for you.",
      },

      {
        title: "Pay with Apple Pay or Google Pay",
        description:
          "Add the card to your mobile wallets and spend instantly even before it arrives.",
      },
    ],
  },
];

function Cards() {
  return (
    <div>
      <p className="mb-10 text-3xl font-semibold tracking-wide text-gray-700">
        Choose the Debit Card
      </p>

      <div className="flex flex-col gap-30">
        {cards.map((card, index) => (
          <CardType key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

function CardType({ card }: { card: DebitCardType }) {
  return (
    <div className="flex gap-10">
      <div>
        <Image
          src={`/bank-cards/${card.image}`}
          alt=""
          height={350}
          width={350}
          draggable={false}
        />
      </div>

      <div>
        <p className="mb-5 text-2xl font-semibold tracking-wide uppercase">
          {card.type}
        </p>

        <ul className="mb-5 flex flex-col gap-5">
          {card.offerings.map((item, index) => (
            <li key={index}>
              <p className="mb-1 font-medium">{item.title}</p>
              <p className="text-[15px] text-gray-500">{item.description}</p>
            </li>
          ))}
        </ul>

        <p className="mb-5 font-medium text-gray-600">€{card.price},00</p>

        <p className="mb-5 text-sm font-light text-gray-700">
          By ordering your card, you accept our terms and conditions.
        </p>

        <PrimaryButton path="">
          Order the <span className="capitalize">{card.type}</span> Card
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Cards;
