export function getFutureDate(n: number = 2) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + n);
  return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
}

export function getDaysBetweenDates(
  firstDate: string | Date,
  secondDate: string | Date,
) {
  const firstDateFormat = new Date(firstDate);
  const secondDateFormat = new Date(secondDate);

  const diffTime = Number(secondDateFormat) - Number(firstDateFormat);

  const daysInBetween = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return daysInBetween;
}

export function formatIntlDate(value: string) {
  if (!value) return;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const daysDifference = getDaysBetweenDates(value, getFutureDate(7));

  if (daysDifference > 0 && daysDifference <= 7) {
    const dayIndex = new Date(value).getDay();
    return days[dayIndex];
  } else
    return new Intl.DateTimeFormat("en-DE", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(value));
}
