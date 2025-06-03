export default async function getCurrenciesRate(toValue: string) {
  try {
    const response = await fetch(
      `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${process.env.CURRENCY_RATE_KEY}&symbols=${toValue}&base=USD`,
    );
    if (!response.ok) throw new Error("Could not get the data.");

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
