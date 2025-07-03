import { UserDataType } from "@/types/types";
import FormInput from "../FormInput";

function DebitCardHolder({ userData }: { userData: UserDataType }) {
  const { email, firstName, lastName, phoneNumber } = userData;

  return (
    <>
      <p className="mb-3 text-lg font-medium">Debit Card Holder Details</p>

      <div className="grid grid-cols-2 gap-5">
        <FormInput
          label="First Name"
          name="holderFirstName"
          value={firstName}
          type="text"
          last
          readonly
        />
        <FormInput
          label="Last Name"
          name="holderLastName"
          value={lastName}
          type="text"
          last
          readonly
        />
        <FormInput
          label="Email"
          name="email"
          value={email}
          type="email"
          last
          readonly
        />
        <FormInput
          label="Phone"
          name="phone"
          value={phoneNumber}
          type="tel"
          last
          readonly
        />
      </div>
    </>
  );
}

export default DebitCardHolder;
