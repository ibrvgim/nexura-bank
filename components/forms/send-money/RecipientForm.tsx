import formatString from "@/utilities/formatString";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import FormTab from "../FormTab";

function RecipientForm({ accountType }: { accountType: string }) {
  return (
    <>
      <FormInput
        label="Recipient's Email:"
        type="email"
        placeholder="nexura@account.com"
        last
      />

      <p className="mt-8 mb-4 text-sm font-medium tracking-wide text-gray-700">
        Bank Details
      </p>

      <div className="mb-8 flex text-center text-sm">
        <FormTab path="eu" accountType={accountType}>
          EU Account
        </FormTab>

        <FormTab path="non-eu" accountType={accountType}>
          Other Account
        </FormTab>
      </div>

      {formatString(accountType) === "eu" && <EUAccount />}
      {formatString(accountType) === "non-eu" && <OtherAccount />}

      <FormButton>Continue</FormButton>
    </>
  );
}

function EUAccount() {
  return (
    <>
      <FormInput
        label="Recipient's Full Name:"
        type="text"
        placeholder="Alex Johnson"
      />
      <FormInput
        label="IBAN:"
        type="text"
        placeholder="DE12 3456 7890 1234 5678 90"
        last
      />
    </>
  );
}

function OtherAccount() {
  return (
    <>
      <FormInput
        label="Recipient's Full Name:"
        type="text"
        placeholder="Alex Johnson"
      />
      <FormInput label="SWIFT / BIC:" type="text" placeholder="TRWIBEB17" />
      <FormInput label="Account Number:" type="text" last />
    </>
  );
}

export default RecipientForm;
