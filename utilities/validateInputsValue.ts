export function isEmailValid(value: string) {
  if (!value.trim()) return {};
  const isValid = /^\S+@\S+\.\S+$/.test(value.trim());

  if (isValid) return {};
  else return { message: "Enter correct email" };
}

export function isPhoneNumberValid(value: string) {
  if (!value.trim()) return { message: "required" };
  const validRegex =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      value.trim(),
    );

  if (validRegex) return {};
  else return { message: "Enter correct phone number" };
}

export function isInputLengthValid(value: string, minLength: number) {
  if (!value) return { message: "required" };

  if (value.trim() && value.trim().length < minLength)
    return { message: `Minimun ${minLength} characters` };
  else return {};
}
