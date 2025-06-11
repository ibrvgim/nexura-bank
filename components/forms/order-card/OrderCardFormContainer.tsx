import FormButton from "../FormButton";
import DebitCardHolder from "./DebitCardHolder";
import DeliveryAddressCard from "./DeliveryAddressCard";

function OrderCardFormContainer({ type }: { type: string }) {
  return (
    <>
      <p className="text-4xl font-bold tracking-wide text-gray-700">
        Place an order for a{" "}
        <span className="text-green-400 capitalize">{type}</span> Debit Card
      </p>
      <p className="mt-3 mb-8 text-gray-500">
        Please ensure sufficient money are available in your bank account before
        submitting an order.
      </p>

      <div className="mb-14">
        <DebitCardHolder />
      </div>
      <DeliveryAddressCard />

      <div className="float-right mt-10 mb-32 w-1/3 *:mt-4">
        <p className="text-sm font-light text-gray-700">
          By ordering the <span className="font-normal capitalize">{type}</span>{" "}
          card, you accept our terms and conditions.
        </p>
        <FormButton>
          Order <span className="capitalize">{type}</span> Debit Card
        </FormButton>
      </div>
    </>
  );
}

export default OrderCardFormContainer;
