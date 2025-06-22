"use client";

import { useActionState } from "react";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { handleBusinessAccount } from "@/actions/businessAccountActions";
import SelectInput from "../SelectInput";

function BusinessFormContainer({ allCountries }: { allCountries: string[] }) {
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
      <SelectInput
        label="Country"
        name="businessCountry"
        placeholder="Select Country"
        data={allCountries}
        allowSorting
        isContainerInput
        last
      />
      <FormInput label="Address" name="businessAdress" type="text" last />
      <FormInput label="City" name="businessCity" type="text" last />
      <FormInput label="Postal Code" name="businessPostal" type="text" last />

      <p className="col-span-2 mt-12 mb-4 text-3xl font-semibold text-gray-700">
        Additional Information about Business
      </p>

      <SelectInput
        label="Business Area"
        name="businessSector"
        placeholder="Select Business Area"
        data={[
          "Arts & Design",
          "Construction",
          "Education & Courses",
          "Engineering",
          "Finance",
          "Medicine",
          "Marketing",
          "Manufacturing",
          "Media & Communication",
          "Retail",
          "Information Technology",
          "Transportation",
          "Telecommunications",
          "Other",
        ]}
        isContainerInput
        last
      />
      <SelectInput
        label="Employees Number"
        name="employeesNumber"
        data={["1 - 10", "10 - 50", "50 - 100", "100+"]}
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
