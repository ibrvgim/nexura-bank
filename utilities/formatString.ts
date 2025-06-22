export default function formatString(value: string) {
  return value.toLowerCase().trim();
}

export function capitalizeString(value: string) {
  if (!value) return "";

  return value
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}

export function createInitials(value: string) {
  if (!value) return;

  const formatString = value.split(" ");

  if (formatString.length > 1) {
    return (formatString[0][0] + formatString[1][0]).toUpperCase();
  } else if (formatString.length === 1) {
    return formatString[0].slice(0, 2).toUpperCase();
  } else return;
}
