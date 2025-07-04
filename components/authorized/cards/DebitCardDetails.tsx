"use client";

import { useActionState, useState } from "react";
import DebitCardPattern from "./DebitCardPattern";
import Link from "next/link";
import {
  closeDebitCard,
  handleDebitCardStatus,
} from "@/actions/debitCardAction";
import BasicModalWindow from "@/components/common/BasicModalWindow";
import ConfirmationMessage from "@/components/common/ConfirmationMessage";

interface DebitCardType {
  cardHolder: string;
  cardNumber: string;
  cvv: number | string;
  expiryDate: string;
  cardType: string;
  price: number;
  isActive: boolean;
}

function DebitCardDetails({
  currentUserDebitCard,
}: {
  currentUserDebitCard: DebitCardType;
}) {
  const [showHiddenData, setShowHiddenData] = useState({
    cardNumber: false,
    cvv: false,
  });

  const { cardHolder, cardNumber, cvv, expiryDate, cardType, isActive } =
    currentUserDebitCard;

  function toggleHiddenData(field: "cardNumber" | "cvv") {
    setShowHiddenData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }

  return (
    <>
      <div className="flex gap-10">
        <DebitCardPattern
          showHiddenData={showHiddenData.cardNumber}
          cardNumber={cardNumber}
          toggleHiddenData={toggleHiddenData}
          cardType={cardType}
          cardHolder={cardHolder}
          isFrontSide
        />

        <DebitCardPattern
          cardType={cardType}
          showHiddenData={showHiddenData.cvv}
          toggleHiddenData={toggleHiddenData}
          cvv={cvv}
          isFrontSide={false}
        />
      </div>

      <div className="mt-14">
        <p className="mb-2 text-2xl font-semibold text-gray-700">
          Card Details
        </p>

        <table className="border-separate border-spacing-y-4">
          <tbody>
            <tr className="*:text-start">
              <th className="font-light text-gray-500">Cardholder Name:</th>
              <td className="ml-15 inline-block">{cardHolder}</td>
            </tr>

            <tr className="*:text-start">
              <th className="font-light text-gray-500">Debit Card Number:</th>
              <td
                role="button"
                onClick={() => toggleHiddenData("cardNumber")}
                className="ml-15 inline-block cursor-pointer transition-colors duration-200 hover:text-green-500"
              >
                {showHiddenData.cardNumber
                  ? cardNumber
                  : cardNumber.slice(0, 14).replace(/\d/g, "*") +
                    cardNumber.slice(14)}
              </td>
            </tr>

            <tr className="*:text-start">
              <th className="font-light text-gray-500">Expiry Date:</th>
              <td className="ml-15 inline-block">{expiryDate}</td>
            </tr>

            <tr className="*:text-start">
              <th className="font-light text-gray-500">CVV:</th>
              <td
                role="button"
                onClick={() => toggleHiddenData("cvv")}
                className="ml-15 inline-block cursor-pointer transition-colors duration-200 hover:text-green-500"
              >
                {showHiddenData.cvv ? cvv : "***"}
              </td>
            </tr>

            <tr className="capitalize *:text-start">
              <th className="font-light text-gray-500">Debit Card Type:</th>
              <td className="ml-15 inline-block">{cardType}</td>
            </tr>

            <tr className="capitalize *:text-start">
              <th className="font-light text-gray-500">Status:</th>
              <td
                className={`ml-15 inline-block ${isActive ? "text-green-500" : "text-red-500"}`}
              >
                {isActive ? "Active" : "In-Active"}
              </td>
            </tr>
          </tbody>
        </table>

        <ButtonsContainer isActive={isActive} />
      </div>
    </>
  );
}

function ButtonsContainer({ isActive }: { isActive: boolean }) {
  const [alertWindow, setAlertWindow] = useState(false);
  const onOpen = () => setAlertWindow(true);
  const onClose = () => setAlertWindow(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, closeCardFormAction, isClosing] = useActionState(
    closeDebitCard,
    null,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__, cardStatusFormAction, isStatusChanging] = useActionState(
    handleDebitCardStatus,
    null,
  );

  return (
    <ul className="mt-6 flex gap-3">
      <li>
        <form action={cardStatusFormAction}>
          <button
            className="cursor-pointer rounded-full border-2 border-gray-300 px-8 py-1 text-xs font-medium text-gray-500 uppercase transition-all duration-300 hover:border-gray-700 hover:bg-gray-700 hover:text-white disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500"
            disabled={isClosing || isStatusChanging}
          >
            {isStatusChanging
              ? "Processing..."
              : isActive
                ? "Freeze the Card"
                : "Activate the Card"}
          </button>
        </form>
      </li>

      <li>
        <Link
          href={isClosing ? "" : "/order-card"}
          className={`inline-block rounded-full border-2 border-gray-300 px-8 py-1 text-xs font-medium text-gray-500 uppercase transition-all duration-300 hover:border-gray-700 ${isClosing || isStatusChanging ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-700 hover:text-white"}`}
          scroll={false}
        >
          Buy New Card
        </Link>
      </li>

      <li>
        <BasicModalWindow
          button={
            <button
              className={`rounded-full border-2 px-8 py-1 text-xs font-medium uppercase transition-all duration-300 ${isClosing || isStatusChanging ? "cursor-not-allowed border-red-300 text-red-400 opacity-70" : "cursor-pointer border-red-300 text-red-500 hover:border-red-600 hover:bg-red-600 hover:text-white"}`}
              disabled={isClosing || isStatusChanging}
              onClick={onOpen}
            >
              Close the Card
            </button>
          }
          handleClose={onClose}
          open={alertWindow}
        >
          <ConfirmationMessage
            title="Do you want to close your Debit Card?"
            onClose={onClose}
            formAction={closeCardFormAction}
            isPending={isClosing}
          >
            Once you close your debit card, it will no longer be usable,
            including your physical card. To use a debit card in the future, you
            will need to order a new one.
          </ConfirmationMessage>
        </BasicModalWindow>
      </li>
    </ul>
  );
}

export default DebitCardDetails;
