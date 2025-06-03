export default async function getCurrencies() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) throw new Error("Could not get data.");

    const data = await response.json();

    const seen = new Set();
    const uniqueCurrencies = [];

    for (const item of data) {
      if (!item.currencies) continue;

      const currencies = item.currencies;

      for (const code of Object.keys(currencies)) {
        if (!seen.has(code)) {
          seen.add(code);
          uniqueCurrencies.push({
            currencyCode: code,
            currencyName: currencies[code].name,
            currencySymbol: currencies[code].symbol,
            flag: item.flag,
          });
        }
      }
    }

    return uniqueCurrencies.map((item) => {
      if (item.currencyCode.toLowerCase() === "usd") {
        return {
          ...item,
          flag: "🇺🇸",
        };
      } else if (item.currencyCode.toLowerCase() === "eur") {
        return {
          ...item,
          flag: "🇪🇺",
        };
      } else return item;
    });
  } catch (error) {
    console.error(error);
  }
}
