import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    image: "standard.png",
    type: "standard",
    price: 7,
  },

  {
    image: "premium.png",
    type: "premium",
    price: 14,
  },

  {
    image: "platinum.png",
    type: "platinum",
    price: 28,
  },
];

function ChooseCardMenu() {
  return (
    <>
      <p className="mb-12 text-4xl font-bold tracking-wide text-gray-700">
        Choose Debit Card to Order
      </p>
      <ul className="grid grid-cols-2 gap-5">
        {cards.map((item) => (
          <CardItem
            key={item.type}
            cardType={item.type}
            cardImage={item.image}
            price={item.price}
          />
        ))}
      </ul>
    </>
  );
}

function CardItem({
  cardType,
  cardImage,
  price,
}: {
  cardType: string;
  cardImage: string;
  price: number;
}) {
  return (
    <li>
      <Link
        href={`?type=${cardType}`}
        scroll={false}
        className="flex w-full cursor-pointer items-center gap-6 rounded-xl p-3 outline-2 outline-gray-300 transition-all duration-300 hover:bg-green-50 hover:outline-gray-500 hover:*:text-gray-900"
      >
        <Image
          src={`/bank-cards/${cardImage}`}
          alt={`${cardType} bank card image`}
          height={250}
          width={250}
          draggable={false}
        />

        <div className="capitalize">
          <p className="mb-2 text-xl font-light tracking-wide">
            {cardType} Debit Card
          </p>
          <p className="text-xl font-medium">{price},00€</p>
        </div>
      </Link>
    </li>
  );
}

export default ChooseCardMenu;
