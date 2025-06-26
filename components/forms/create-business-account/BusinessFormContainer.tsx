"use client";

import { useActionState } from "react";
import FormButton from "../FormButton";
import FormInput from "../FormInput";

import SelectInput from "../SelectInput";
import { createBusinessAccount } from "@/actions/businessAccountActions";

function BusinessFormContainer({ allCountries }: { allCountries: string[] }) {
  const [errors, formAction, isPending] = useActionState(
    createBusinessAccount,
    {},
  );

  return (
    <form action={formAction} className="my-20 grid grid-cols-2 gap-5">
      <p className="col-span-2 mb-6 text-4xl font-semibold text-gray-700">
        Create a Business Account
      </p>

      <FormInput
        label="Business Name"
        name="businessName"
        directErros={errors.businessName}
        type="text"
        placeholder="ex. Nexura Bank"
        last
      />
      <SelectInput
        label="Country"
        name="businessCountry"
        placeholder="Select Country"
        directError={errors.businessCountry}
        data={allCountries}
        allowSorting
        isContainerInput
        last
      />
      <FormInput
        label="Address"
        name="businessAddress"
        type="text"
        directErros={errors.businessAddress}
        last
      />
      <FormInput
        label="City"
        name="businessCity"
        type="text"
        directErros={errors.businessCity}
        last
      />
      <FormInput
        label="Postal Code"
        name="businessPostal"
        type="text"
        directErros={errors.businessPostal}
        last
      />

      <p className="col-span-2 mt-12 mb-2 text-xl font-semibold text-gray-700">
        Additional Information about Business
      </p>

      <SelectInput
        label="Business Area"
        name="businessSector"
        placeholder="Select Business Area"
        directError={errors.businessSector}
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
        directError={errors.employeesNumber}
        data={["1 - 10", "10 - 50", "50 - 100", "100+"]}
        last
      />
      <FormInput
        label="Website / Social Media"
        name="businessWebsite"
        directErros={errors.businessWebsite}
        type="text"
        optional
        last
      />

      <span className="col-start-2 row-start-8 ml-auto inline-block w-3/4 *:mt-4">
        <p className="text-sm font-light text-gray-700">
          By creating the{" "}
          <span className="font-normal capitalize">Business Account</span>, you
          accept our terms and conditions.
        </p>
        <FormButton
          type="submit"
          title="Create a Business Account"
          isPending={isPending}
        />
      </span>
    </form>
  );
}

export default BusinessFormContainer;
