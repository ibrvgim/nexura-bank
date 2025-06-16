export async function handleSendAddMoney(_: unknown, formData: FormData) {
  console.log(formData);
  const repsonse = new Promise((resolve) => {
    setTimeout(() => resolve("success"), 5000);
  });
  await repsonse;

  return {};
}
