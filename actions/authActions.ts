interface ErrorsType {
  [key: string]: string;
}

// LOGIN ACTION
export async function handleLogin(_: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: ErrorsType = {};

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email.trim());
  const isPasswordValid = password.length >= 8;

  if (!email) {
    errors["email"] = "Must be filled in";
  } else if (!isEmailValid) {
    errors["email"] = "Enter correct email";
  }

  if (!password) {
    errors["password"] = "Must be filled in";
  } else if (!isPasswordValid) {
    errors["password"] = "Minimum 8 characters";
  }

  const isErrorsExist = Object.entries(errors).length > 0;
  if (isErrorsExist) return errors;

  const repsonse = new Promise((resolve) => {
    setTimeout(() => resolve("success"), 5000);
  });
  await repsonse;

  return {};
}

// REGISTRATION ACTION
export async function handleRegistration(_: unknown, formData: FormData) {
  const repsonse = new Promise((resolve) => {
    setTimeout(() => resolve("success"), 5000);
  });
  await repsonse;

  return {};
}
