import AuthInput from "@/components/authentication/AuthInput";
import AuthPattern from "@/components/authentication/AuthPattern";

function Register() {
  return (
    <div>
      <AuthPattern title="Create Nexura Account" path="/login">
        <AuthInput
          label="Enter email address:"
          type="email"
          placeholder="nexura@account.com"
        />
      </AuthPattern>
    </div>
  );
}

export default Register;
