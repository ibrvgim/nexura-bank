import { RegistrationDataType } from "@/types/types";
import FormInput from "../forms/FormInput";
import {
  isInputLengthValid,
  isPhoneNumberValid,
} from "@/utilities/validateInputsValue";
import { useActionState } from "react";
import { handleRegistration } from "@/actions/authActions";
import FormButton from "../forms/FormButton";
import { useSearchParams } from "next/navigation";
import ErrorMessageCard from "../common/ErrorMessageCard";

function RegisterPersonalDetails({
  formData,
  isPersonalDetailsValid,
  onChange,
}: {
  formData: RegistrationDataType;
  isPersonalDetailsValid: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [errors, formAction, isPending] = useActionState(
    handleRegistration,
    {},
  );
  const searchParams = useSearchParams();
  const actionType = searchParams.get("action") as string | null;

  return (
    <form action={formAction}>
      {errors?.message && (
        <span className="mb-8 block">
          <ErrorMessageCard error={errors.message} />
        </span>
      )}

      <FormInput
        label="First Name"
        name="firstName"
        type="text"
        placeholder="Alex"
        value={formData.firstName}
        onChange={onChange}
        error={isInputLengthValid(formData?.firstName, 2)}
      />
      <FormInput
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Johnson"
        value={formData.lastName}
        onChange={onChange}
        error={isInputLengthValid(formData?.lastName, 2)}
      />

      <FormInput
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        placeholder="+49 177 835 55 76"
        value={formData.phoneNumber}
        onChange={onChange}
        error={isPhoneNumberValid(formData?.phoneNumber)}
        last
      />

      <input
        name="email"
        type="email"
        value={formData?.email}
        readOnly
        hidden
      />
      <input
        name="password"
        type="password"
        value={formData?.password}
        readOnly
        hidden
      />
      <input name="action" value={actionType || ""} readOnly hidden />

      <FormButton
        title="Create an Account"
        type="submit"
        active={isPersonalDetailsValid}
        isPending={isPending}
      />
    </form>
  );
}

export default RegisterPersonalDetails;
