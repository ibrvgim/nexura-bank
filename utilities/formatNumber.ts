export default function formatNumber(value: number | string) {
  return new Intl.NumberFormat("de-DE").format(Number(value));
}
