export default async function getCurrencies() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=currencies,cca2,flag",
    );

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
            flag: `https://flagcdn.com/w80/${item.cca2.toLowerCase()}.png`,
          });
        }
      }
    }

    return uniqueCurrencies.map((item) => {
      if (item.currencyCode.toLowerCase() === "usd") {
        return {
          ...item,
          flag: `https://flagcdn.com/w80/us.png`,
        };
      } else if (item.currencyCode.toLowerCase() === "eur") {
        return {
          ...item,
          flag: `https://flagcdn.com/w80/eu.png`,
        };
      } else return item;
    });
  } catch (error) {
    console.error(error);
  }
}
