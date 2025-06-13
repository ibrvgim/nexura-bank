import FormInput from "../forms/FormInput";

function CreatePasswordContainer({
  submitButton,
}: {
  submitButton: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Minimum 8 characters"
          optional
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          optional
          last
        />
      </div>

      {submitButton}
    </div>
  );
}

export default CreatePasswordContainer;
