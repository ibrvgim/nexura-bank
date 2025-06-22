"use client";

import { useActionState } from "react";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { handleBusinessAccount } from "@/actions/businessAccountActions";

function BusinessFormContainer() {
  const [errors, formAction] = useActionState(handleBusinessAccount, {});

  console.log(errors);

  return (
    <form action={formAction} className="my-20 grid grid-cols-2 gap-5">
      <p className="col-span-2 mb-4 text-3xl font-semibold text-gray-700">
        Main Information about Business
      </p>

      <FormInput
        label="Business Name"
        name="businessName"
        type="text"
        placeholder="ex. Nexura Bank"
        last
      />
      <FormInput label="Country" name="businessCountry" type="text" last />
      <FormInput label="Address" name="businessAdress" type="text" last />
      <FormInput label="City" name="businessCity" type="text" last />
      <FormInput label="Postal Code" name="businessPostal" type="text" last />

      <p className="col-span-2 mt-12 mb-4 text-3xl font-semibold text-gray-700">
        Additional Information about Business
      </p>

      <FormInput
        label="Business Sector"
        name="businessSector"
        type="text"
        last
      />
      <FormInput
        label="Employees Number"
        name="employeesNumber"
        type="text"
        last
      />
      <FormInput
        label="Website / Social Media"
        name="businessWebsite"
        type="text"
        optional
        last
      />

      <span className="col-start-2 row-start-8 inline-block">
        <FormButton type="submit" title="Create a Business Account" />
      </span>
    </form>
  );
}

export default BusinessFormContainer;
