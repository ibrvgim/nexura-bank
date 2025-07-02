export default function formatNumber(value: number | string | null) {
  if (!value && value !== 0) return;

  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    roundingMode: "floor",
  }).format(Number(value));
}
