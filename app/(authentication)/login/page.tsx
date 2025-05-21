import AuthInput from "@/components/authentication/AuthInput";
import AuthPattern from "@/components/authentication/AuthPattern";

function Login() {
  return (
    <div>
      <AuthPattern title="Welcome to Nexura" path="/register">
        <div className="mb-5">
          <AuthInput
            label="Enter email address:"
            type="email"
            placeholder="nexura@account.com"
          />
        </div>

        <AuthInput label="Password:" type="password" />
      </AuthPattern>
    </div>
  );
}

export default Login;
