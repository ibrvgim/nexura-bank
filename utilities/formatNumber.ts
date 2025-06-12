export default function formatNumber(value: number | string) {
  if (!value) return;
  
  return new Intl.NumberFormat("de-DE").format(Number(value));
}
