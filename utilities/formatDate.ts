export function getFutureDay(n: number) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + (n || 0));
  return currentDate.getDay();
}

export function formatIntlDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}
