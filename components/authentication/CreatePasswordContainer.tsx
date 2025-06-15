import { RegistrationDataType } from "@/types/types";
import FormInput from "../forms/FormInput";
import { isInputLengthValid } from "@/utilities/validateInputsValue";

function CreatePasswordContainer({
  submitButton,
  formData,
  onChange,
}: {
  submitButton: React.ReactNode;
  formData: RegistrationDataType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <div>
        <FormInput
          label="Create Password"
          name="password"
          type="password"
          placeholder="Minimum 8 characters"
          value={formData.password}
          onChange={onChange}
          error={isInputLengthValid(formData.password, 8)}
          optional
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={onChange}
          optional
          error={
            formData.confirmPassword &&
            formData.password !== formData.confirmPassword
              ? { message: "Passwords are not the same" }
              : {}
          }
          last
        />
      </div>

      {submitButton}
    </div>
  );
}

export default CreatePasswordContainer;
