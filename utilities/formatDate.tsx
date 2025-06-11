export function getFutureDay(n: number) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + n);
  return currentDate.getDay();
}
