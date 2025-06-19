import AuthContainer from "@/components/authentication/AuthContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

function Register() {
  return (
    <div className="mt-12 mb-16">
      <AuthContainer />
    </div>
  );
}

export default Register;
