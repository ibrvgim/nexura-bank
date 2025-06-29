export async function chatFormAction() {
  return new Promise((response) => {
    setTimeout(() => response(true), 3000);
  });
}
