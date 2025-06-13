import formatString from "@/utilities/formatString";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import FormTab from "../FormTab";
import { SendAddMoneyType } from "@/types/types";
import {
  isEmailValid,
  isInputLengthValid,
} from "@/utilities/validateInputsValue";

function RecipientForm({
  setFormStep,
  formData,
  handleInputChange,
  handleAccountType,
}: {
  setFormStep: (value: string) => void;
  formData: SendAddMoneyType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAccountType: (value: "eu" | "other") => void;
}) {
  const isDataValid = () => {
    if (!formData.recipientFullname || !formData.accountNumber) return false;

    if (!!isEmailValid(formData.recipientEmail || "").message) return false;
    else if (!!isInputLengthValid(formData.recipientFullname, 5)?.message)
      return false;
    else if (!!isInputLengthValid(formData.accountNumber, 12)?.message)
      return false;
    else if (
      formData.accountType === "other" &&
      !!isInputLengthValid(formData.accountSwift || "", 8)?.message
    )
      return false;
    else return true;
  };

  function handleFormStep() {
    if (isDataValid()) setFormStep("pay");
  }

  return (
    <>
      <FormInput
        label="Recipient's Email"
        name="recipientEmail"
        type="email"
        placeholder="nexura@account.com"
        value={formData.recipientEmail}
        error={isEmailValid(formData.recipientEmail || "")}
        onChange={handleInputChange}
        last
        optional
      />

      <p className="mt-8 mb-4 text-sm font-medium tracking-wide text-gray-700">
        Bank Details
      </p>

      <div className="mb-8 flex text-center text-sm">
        <FormTab
          type="eu"
          accountType={formData.accountType || ""}
          handleAccountType={handleAccountType}
        >
          EU Account
        </FormTab>

        <FormTab
          type="other"
          accountType={formData.accountType || ""}
          handleAccountType={handleAccountType}
        >
          Other Account
        </FormTab>
      </div>

      {formatString(formData.accountType || "") === "eu" && (
        <EUAccount formData={formData} handleInputChange={handleInputChange} />
      )}
      {formatString(formData.accountType || "") === "other" && (
        <OtherAccount
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      <FormButton onClick={handleFormStep} active={isDataValid()}>
        Continue
      </FormButton>
    </>
  );
}

function EUAccount({
  formData,
  handleInputChange,
}: {
  formData: SendAddMoneyType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <FormInput
        label="Recipient's Full Name"
        name="recipientFullname"
        type="text"
        placeholder="Alex Johnson"
        error={isInputLengthValid(formData.recipientFullname || "", 5)}
        value={formData.recipientFullname}
        onChange={handleInputChange}
      />
      <FormInput
        label="IBAN"
        name="accountNumber"
        type="text"
        placeholder="DE12 3456 7890 1234 5678 90"
        error={isInputLengthValid(formData.accountNumber || "", 12)}
        value={formData.accountNumber}
        onChange={handleInputChange}
        last
      />
    </>
  );
}

function OtherAccount({
  formData,
  handleInputChange,
}: {
  formData: SendAddMoneyType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <FormInput
        label="Recipient's Full Name"
        name="recipientFullname"
        type="text"
        placeholder="Alex Johnson"
        error={isInputLengthValid(formData.recipientFullname || "", 5)}
        value={formData.recipientFullname}
        onChange={handleInputChange}
      />
      <FormInput
        label="SWIFT / BIC"
        name="accountSwift"
        type="text"
        placeholder="TRWIBEB17"
        error={isInputLengthValid(formData.accountSwift || "", 8)}
        value={formData.accountSwift}
        onChange={handleInputChange}
      />
      <FormInput
        label="Account Number"
        name="accountNumber"
        type="text"
        error={isInputLengthValid(formData.accountNumber || "", 12)}
        value={formData.accountNumber}
        onChange={handleInputChange}
        last
      />
    </>
  );
}

export default RecipientForm;
