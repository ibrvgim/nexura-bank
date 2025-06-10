export function isEmailValid(value: string) {
  if (!value) return {};
  const isValid = /^\S+@\S+\.\S+$/.test(value);

  if (isValid) return {};
  else return { message: "Enter valid email" };
}

export function isInputLengthValid(value: string, minLength: number) {
  if (!value) return { message: "required" };

  if (value && value.length < minLength)
    return { message: `Minimun ${minLength} characters` };
}
