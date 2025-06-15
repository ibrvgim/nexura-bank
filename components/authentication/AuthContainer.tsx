"use client";

import React, { useState } from "react";
import FormButton from "../forms/FormButton";
import FormInput from "../forms/FormInput";
import AuthPattern from "./AuthPattern";
import CreatePasswordContainer from "./CreatePasswordContainer";
import RegisterPersonalDetails from "./RegisterPersonalDetails";
import AuthProgressBar from "./AuthProgressBar";
import {
  isEmailValid,
  isInputLengthValid,
  isPhoneNumberValid,
} from "@/utilities/validateInputsValue";

function AuthContainer() {
  const [registrationStep, setRegistrationStep] = useState<
    "firstStep" | "secondStep" | "thirdStep"
  >("firstStep");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const isValidEmail =
    !!formData?.email && !isEmailValid(formData?.email)?.message;
  const isPasswordValid =
    !isInputLengthValid(formData.password, 8)?.message &&
    formData?.password === formData?.confirmPassword;

  const isPersonalDetailsValid =
    !isInputLengthValid(formData?.firstName, 2)?.message &&
    !isInputLengthValid(formData?.lastName, 2)?.message &&
    !isPhoneNumberValid(formData?.phoneNumber)?.message;

  function handleNextStep(value: "firstStep" | "secondStep" | "thirdStep") {
    setRegistrationStep(value);
  }

  function handleFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="mx-auto w-1/2">
      <AuthProgressBar
        handleNextStep={handleNextStep}
        registrationStep={registrationStep}
      />

      {registrationStep === "firstStep" && (
        <AuthPattern
          title="Create Nexura Account"
          path="/login"
          submitButton={
            <span className="*:mt-5">
              <FormButton
                title="Continue"
                onClick={() => isValidEmail && handleNextStep("secondStep")}
                active={isValidEmail}
              />
            </span>
          }
        >
          <FormInput
            label="Email address"
            name="email"
            type="email"
            placeholder="nexura@account.com"
            value={formData.email}
            onChange={handleFormData}
            error={isEmailValid(formData?.email)}
            optional
          />
        </AuthPattern>
      )}

      {registrationStep === "secondStep" && (
        <CreatePasswordContainer
          submitButton={
            <FormButton
              title="Continue"
              onClick={() => isPasswordValid && handleNextStep("thirdStep")}
              active={isPasswordValid}
            />
          }
          formData={formData}
          onChange={handleFormData}
        />
      )}

      {registrationStep === "thirdStep" && (
        <RegisterPersonalDetails
          formData={formData}
          onChange={handleFormData}
          isPersonalDetailsValid={isPersonalDetailsValid}
        />
      )}
    </div>
  );
}

export default AuthContainer;
