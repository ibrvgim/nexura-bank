"use client";

import { UserDataType } from "@/types/types";
import FormButton from "../FormButton";
import DebitCardHolder from "./DebitCardHolder";
import DeliveryAddressCard from "./DeliveryAddressCard";
import { useActionState } from "react";
import { debitCardAction } from "@/actions/debitCardAction";

function OrderCardFormContainer({
  type,
  cardPrice,
  userData,
  allCountries,
}: {
  type: string;
  cardPrice: number;
  userData: UserDataType;
  allCountries: string[];
}) {
  const [errors, formAction, isPending] = useActionState(debitCardAction, {});

  return (
    <form action={formAction}>
      <p className="text-4xl font-bold tracking-wide text-gray-700">
        Place an order for a{" "}
        <span className="text-green-400 capitalize">{type}</span> Debit Card
      </p>
      <p className="mt-3 mb-8 text-gray-500">
        Please ensure sufficient money are available in your bank account before
        submitting an order.
      </p>

      <div className="mb-14">
        <DebitCardHolder userData={userData} />
      </div>

      <DeliveryAddressCard errors={errors} allCountries={allCountries} />

      <input name="cardPrice" value={cardPrice} hidden readOnly />
      <input name="cardType" value={type} hidden readOnly />

      <div className="float-right mt-10 mb-32 w-1/3 *:mt-4">
        <p className="text-sm font-light text-gray-700">
          By ordering the <span className="font-normal capitalize">{type}</span>{" "}
          card, you accept our terms and conditions.
        </p>
        <FormButton
          type="submit"
          title={`Order ${type[0]?.toUpperCase() + type?.slice(1)} Debit Card`}
          isPending={isPending}
        />
      </div>
    </form>
  );
}

export default OrderCardFormContainer;
