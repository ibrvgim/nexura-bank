import FormInput from "../FormInput";

function DeliveryAddressCard() {
  return (
    <>
      <p className="mb-3 text-lg font-medium">Delivery Address</p>

      <div className="grid grid-cols-2 gap-5">
        <FormInput label="Country" name="deliveryCountry" type="text" last />
        <FormInput
          label="Address line"
          name="deliveryStreet"
          type="text"
          last
        />
        <FormInput
          label="Company Name"
          name="deliveryCity"
          type="text"
          last
          optional
        />
        <FormInput label="City" name="deliveryCity" type="text" last />
        <FormInput
          label="Postal Code"
          name="deliveryPostcode"
          type="text"
          last
        />
      </div>
    </>
  );
}

export default DeliveryAddressCard;
