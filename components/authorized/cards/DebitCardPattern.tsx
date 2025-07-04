import formatString from "@/utilities/formatString";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { WifiIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const debitCards = [
  {
    cardName: "Standard",
    color: "#05df72 ",
  },

  {
    cardName: "Premium",
    color: "#016630  ",
  },

  {
    cardName: "Platinum",
    color: "#1e2939",
  },
];

function DebitCardPattern({
  showHiddenData = false,
  cardHolder,
  cardNumber,
  cvv,
  cardType,
  toggleHiddenData,
  isFrontSide = true,
}: {
  showHiddenData?: boolean;
  cardHolder?: string;
  cardNumber?: string;
  cvv?: number | string;
  cardType?: string;
  toggleHiddenData?: (field: "cardNumber" | "cvv") => void;
  isFrontSide?: boolean;
}) {
  const detectColor = debitCards.find(
    (item) =>
      cardType && formatString(item.cardName) === formatString(cardType),
  )?.color;

  return (
    <div
      className="flex h-56 w-96 flex-col justify-between overflow-hidden rounded-2xl p-6 text-white shadow-sm"
      style={{ backgroundColor: detectColor }}
    >
      {isFrontSide ? (
        <CardFrontSide
          cardHolder={cardHolder}
          cardNumber={cardNumber}
          cardType={cardType}
          toggleHiddenData={toggleHiddenData}
          showHiddenData={showHiddenData}
        />
      ) : (
        <CardBackSide
          showHiddenData={showHiddenData}
          toggleHiddenData={toggleHiddenData}
          cvv={cvv}
        />
      )}
    </div>
  );
}

function CardFrontSide({
  showHiddenData = false,
  cardHolder,
  cardNumber,
  cardType,
  toggleHiddenData,
}: {
  showHiddenData?: boolean;
  cardHolder?: string;
  cardNumber?: string;
  cardType?: string;
  toggleHiddenData?: (field: "cardNumber" | "cvv") => void;
}) {
  if (!cardNumber || !cardHolder || !toggleHiddenData) return;

  return (
    <>
      <div className="flex items-center justify-between">
        <Image
          src="/logos/logo_white.png"
          alt="nexura logo"
          height={110}
          width={110}
          draggable={false}
        />

        <p className="text-lg capitalize">{cardType}</p>
      </div>

      <span className="flex items-center gap-3 text-xl font-medium tracking-[0.2rem]">
        {showHiddenData
          ? cardNumber
          : cardNumber.slice(0, 14).replace(/\d/g, "*") + cardNumber.slice(14)}

        <button
          className="cursor-pointer"
          onClick={() => toggleHiddenData("cardNumber")}
        >
          {showHiddenData ? (
            <EyeSlashIcon className="size-5 text-gray-100 transition-colors hover:text-white" />
          ) : (
            <EyeIcon className="size-5 text-gray-100 transition-colors hover:text-white" />
          )}
        </button>
      </span>

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium uppercase">{cardHolder}</p>
        <Image
          src="/logos/visa_logo.svg"
          alt="nexura logo"
          height={60}
          width={60}
          draggable={false}
        />
      </div>
    </>
  );
}

function CardBackSide({
  showHiddenData = false,
  cvv,
  toggleHiddenData,
}: {
  showHiddenData?: boolean;
  cvv?: number | string;
  toggleHiddenData?: (field: "cardNumber" | "cvv") => void;
}) {
  if (!toggleHiddenData) return;

  return (
    <>
      <span className="-mx-6 h-11 bg-black">&nbsp;</span>
      <span className="flex items-center justify-between">
        <span className="flex h-full w-2/3 items-center gap-2">
          <span className="h-full w-full rounded-md bg-white"></span>
          <WifiIcon className="size-7 rotate-90" />
        </span>

        <span
          role="button"
          className="w-10 cursor-pointer rounded-md bg-white py-2 text-center text-xs font-semibold text-gray-800"
          onClick={() => toggleHiddenData("cvv")}
        >
          {showHiddenData ? cvv : "***"}
        </span>
      </span>

      <span className="text-[9px] font-medium">
        For customer service, call Nexura Bank at +49 177 835 55 76.
      </span>
    </>
  );
}

export default DebitCardPattern;
