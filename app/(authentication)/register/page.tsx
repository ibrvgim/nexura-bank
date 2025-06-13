import AuthPattern from "@/components/authentication/AuthPattern";
import FormButton from "@/components/forms/FormButton";
import FormInput from "@/components/forms/FormInput";

function Register() {
  return (
    <div>
      <AuthPattern
        title="Create Nexura Account"
        path="/login"
        submitButton={
          <span className="*:mt-2">
            <FormButton>Continue</FormButton>
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
    </div>
  );
}

export default Register;
