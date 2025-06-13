import FormInput from "../forms/FormInput";

function RegisterPersonalDetails({
  submitButton,
}: {
  submitButton: React.ReactNode;
}) {
  return (
    <>
      <div>
        <FormInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Alex"
        />
        <FormInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Johnson"
        />

        <FormInput
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          placeholder="+49 177 835 55 76"
          last
        />
      </div>

      {submitButton}
    </>
  );
}

export default RegisterPersonalDetails;
