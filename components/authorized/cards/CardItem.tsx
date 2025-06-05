import { PrimaryButton } from "@/components/common/Buttons";
import { DebitCardType } from "@/types/types";
import Image from "next/image";

function CardItem({ card }: { card: DebitCardType }) {
  return (
    <div className="flex gap-15">
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
        <p className="mb-5 w-full text-2xl font-extrabold tracking-wide uppercase">
          {card.type}
          <span className="float-right">€{card.price},00</span>
        </p>

        <ul className="mb-5 flex flex-col gap-5">
          {card.offerings.map((item, index) => (
            <li key={index} className="flex gap-4">
              <span className="*:size-5.5">{item.icon}</span>

              <div>
                <p className="mb-1 font-medium">{item.title}</p>
                <p className="text-[15px] text-gray-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 mb-5 text-sm font-light text-gray-700">
          By ordering the{" "}
          <span className="font-normal capitalize">{card.type}</span> card, you
          accept our terms and conditions.
        </p>

        <PrimaryButton path="">
          Order the <span className="capitalize">{card.type}</span> Card
        </PrimaryButton>
      </div>
    </div>
  );
}

export default CardItem;
