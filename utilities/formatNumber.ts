export default function formatNumber(value: number | string) {
  if (!value && value !== 0) return;

  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
  }).format(Number(value));
}
