"use client";

import { useState } from "react";
import FormButton from "../forms/FormButton";
import FormInput from "../forms/FormInput";
import AuthPattern from "./AuthPattern";
import CreatePasswordContainer from "./CreatePasswordContainer";
import RegisterPersonalDetails from "./RegisterPersonalDetails";
import AuthProgressBar from "./AuthProgressBar";

function AuthContainer() {
  const [registrationStep, setRegistrationStep] = useState<
    "firstStep" | "secondStep" | "thirdStep"
  >("firstStep");

  function handleNextStep(value: "firstStep" | "secondStep" | "thirdStep") {
    setRegistrationStep(value);
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
              <FormButton onClick={() => handleNextStep("secondStep")}>
                Continue
              </FormButton>
            </span>
          }
        >
          <FormInput
            label="Email address"
            name="email"
            type="email"
            placeholder="nexura@account.com"
            optional
          />
        </AuthPattern>
      )}

      {registrationStep === "secondStep" && (
        <CreatePasswordContainer
          submitButton={
            <FormButton onClick={() => handleNextStep("thirdStep")}>
              Continue
            </FormButton>
          }
        />
      )}

      {registrationStep === "thirdStep" && (
        <RegisterPersonalDetails
          submitButton={<FormButton>Create an Account</FormButton>}
        />
      )}
    </div>
  );
}

export default AuthContainer;
