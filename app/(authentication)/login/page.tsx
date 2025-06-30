"use client";

import { handleLogin } from "@/actions/authActions";
import AuthPattern from "@/components/authentication/AuthPattern";
import ErrorMessageCard from "@/components/common/ErrorMessageCard";
import FormButton from "@/components/forms/FormButton";
import FormInput from "@/components/forms/FormInput";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

function Login() {
  const [errors, formAction, isPending] = useActionState(handleLogin, {});
  const searchParams = useSearchParams();

  const actionType = searchParams.get("action") as string | null;

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
          <span className="mb-8 block">
            <ErrorMessageCard error={errors.credentials} />
          </span>
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

      <input name="action" value={actionType || ""} readOnly hidden />
    </form>
  );
}

export default Login;
