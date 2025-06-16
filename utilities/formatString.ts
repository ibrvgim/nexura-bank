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
