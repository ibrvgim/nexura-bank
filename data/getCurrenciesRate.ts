export default async function getCurrenciesRate(
  fromValue: string,
  toValue: string,
) {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_RATE_KEY}/latest/${fromValue.toUpperCase()}`,
    );
    if (!response.ok) throw new Error("Could not get the data.");

    const data = await response.json();

    return data.conversion_rates[toValue.toUpperCase()];
  } catch (error) {
    console.error(error);
  }
}
