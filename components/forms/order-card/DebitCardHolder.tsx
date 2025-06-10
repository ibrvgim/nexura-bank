import FormInput from "../FormInput";

function DebitCardHolder() {
  return (
    <>
      <p className="mb-3 text-lg font-medium">Debit Card Holder Details</p>

      <div className="grid grid-cols-2 gap-5">
        <FormInput label="First Name" name="holderFirstName" type="text" last />
        <FormInput label="Last Name" name="holderLastName" type="text" last />
        <FormInput label="Email" name="email" type="email" last />
        <FormInput label="Phone" name="phone" type="tel" last />
      </div>
    </>
  );
}

export default DebitCardHolder;
