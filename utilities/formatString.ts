export default function formatString(value: string) {
  if (!value) return "";
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

export function extractNumericAmount(str: string) {
  if (typeof str !== "string") return null;

  // Remove all currency symbols and letters
  const cleaned = str.replace(/[^\d.,]/g, "");

  // Case 1: contains both dot and comma → guess format based on last separator
  if (cleaned.includes(".") && cleaned.includes(",")) {
    if (cleaned.lastIndexOf(",") > cleaned.lastIndexOf(".")) {
      // likely 1.234,56 => remove dots (thousands), replace comma with dot
      return parseFloat(cleaned.replace(/\./g, "").replace(",", "."));
    } else {
      // likely 1,234.56 => remove commas (thousands)
      return parseFloat(cleaned.replace(/,/g, ""));
    }
  }

  // Case 2: only comma → assume it's a decimal
  if (cleaned.includes(",") && !cleaned.includes(".")) {
    return parseFloat(cleaned.replace(",", "."));
  }

  // Case 3: only dot → could be decimal or thousands
  if (cleaned.includes(".") && !cleaned.includes(",")) {
    const parts = cleaned.split(".");
    if (parts.length === 2 && parts[1].length <= 2) {
      // 1234.56 → decimal
      return parseFloat(cleaned);
    } else {
      // 4.000 → thousands separator
      return parseFloat(cleaned.replace(/\./g, ""));
    }
  }

  // Case 4: plain number
  return parseFloat(cleaned);
}

export function extractCurrencySymbol(str: string) {
  if (typeof str !== "string") return null;

  // Remove all digits, commas, and dots — leave letters, currency symbols, etc.
  return str.replace(/[\d.,\s]/g, "").trim();
}
