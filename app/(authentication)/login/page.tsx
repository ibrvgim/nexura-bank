"use client";

import { handleLogin } from "@/actions/authActions";
import AuthPattern from "@/components/authentication/AuthPattern";
import FormButton from "@/components/forms/FormButton";
import FormInput from "@/components/forms/FormInput";
import { useActionState } from "react";

function Login() {
  const [errors, formAction, isPending] = useActionState(handleLogin, {});

  return (
    <form
      action={formAction}
      className={`mx-auto mt-12 w-1/2 ${!!errors?.credentials ? "mb-20" : ""}`}
    >
      <AuthPattern
        title="Welcome Back to Nexura"
        path="/register"
        submitButton={
          <span className="*:mt-7">
            <FormButton type="submit" title="Log in" isPending={isPending} />
          </span>
        }
      >
        {errors?.credentials && (
          <p className="mb-8 w-full rounded-md bg-red-100 px-8 py-3 text-sm text-red-700">
            {errors.credentials}
          </p>
        )}

        <FormInput
          label="Email address"
          name="email"
          type="email"
          placeholder="nexura@account.com"
          directErros={errors?.email}
          optional
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          directErros={errors?.password}
          optional
          last
        />
      </AuthPattern>
    </form>
  );
}

export default Login;
