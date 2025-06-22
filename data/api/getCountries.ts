export async function getCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name",
    );

    if (!response.ok) throw new Error("Could not get data.");

    const data = await response.json();

    return data.map((item: { name: { common: string } }) => item.name.common);
  } catch (error) {
    console.error(error);
  }
}
