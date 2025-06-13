import AuthPattern from "@/components/authentication/AuthPattern";
import FormButton from "@/components/forms/FormButton";
import FormInput from "@/components/forms/FormInput";

function Login() {
  return (
    <div className="mx-auto mt-12 w-1/2">
      <AuthPattern
        title="Welcome Back to Nexura"
        path="/register"
        submitButton={
          <span className="*:mt-7">
            <FormButton>Log in</FormButton>
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

        <FormInput
          label="Password"
          name="password"
          type="password"
          optional
          last
        />
      </AuthPattern>
    </div>
  );
}

export default Login;
