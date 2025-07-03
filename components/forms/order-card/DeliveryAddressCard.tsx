import FormInput from "../FormInput";
import SelectInput from "../SelectInput";

function DeliveryAddressCard({
  errors,
  allCountries,
}: {
  errors: { [key: string]: string };
  allCountries: string[];
}) {
  return (
    <>
      <p className="mb-3 text-lg font-medium">Delivery Address</p>

      <div className="grid grid-cols-2 gap-5">
        <SelectInput
          label="Country"
          name="deliveryCountry"
          placeholder="Select Country"
          directError={errors.country}
          data={allCountries}
          allowSorting
          isContainerInput
          last
        />
        <FormInput
          label="Address line"
          name="deliveryStreet"
          directErros={errors.street}
          type="text"
          last
        />
        <FormInput
          label="Company Name"
          name="companyName"
          type="text"
          last
          optional
        />
        <FormInput
          label="City"
          name="deliveryCity"
          directErros={errors.city}
          type="text"
          last
        />
        <FormInput
          label="Postal Code"
          name="deliveryPostcode"
          directErros={errors.postalCode}
          type="text"
          last
        />
      </div>
    </>
  );
}

export default DeliveryAddressCard;
