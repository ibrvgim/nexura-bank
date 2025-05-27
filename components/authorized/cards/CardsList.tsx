import {
  BanknotesIcon,
  GlobeAmericasIcon,
  WalletIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";
import CardItem from "./CardItem";

const cards = [
  {
    image: "standard.png",
    type: "standard",
    deliveryTime: "7",
    price: 7,
    offerings: [
      {
        icon: <BanknotesIcon />,
        title: "Withdraw from ATM anywhere",
        description:
          "Withdraw money with 8% commission up to a total of €500 each month.",
      },

      {
        icon: <GlobeAmericasIcon />,
        title: "Spend easily, everywhere you go",
        description: "No right currency, we`'ll do the conversion for you.",
      },

      {
        icon: <WalletIcon />,
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
        icon: <BanknotesIcon />,
        title: "Withdraw from ATM anywhere",
        description:
          "Withdraw money with 6% commission up to a total of €500 each month.",
      },

      {
        icon: <ArrowUturnLeftIcon />,
        title: "Spend easily, get cashback",
        description: "Get 1% cashback on every payment.",
      },

      {
        icon: <WalletIcon />,
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
        icon: <BanknotesIcon />,
        title: "Withdraw from ATM anywhere",
        description:
          "Withdraw money with 4% commission up to a total of €500 each month.",
      },

      {
        icon: <ArrowUturnLeftIcon />,
        title: "Spend easily, get cashback",
        description: "Get 3% cashback on every payment.",
      },

      {
        icon: <WalletIcon />,
        title: "Pay with Apple Pay or Google Pay",
        description:
          "Add the card to your mobile wallets and spend instantly even before it arrives.",
      },
    ],
  },
];

function CardsList() {
  return (
    <div className="flex flex-col gap-30">
      {cards.map((card, index) => (
        <CardItem key={index} card={card} />
      ))}
    </div>
  );
}

export default CardsList;
