import AppCard from "@/components/personal/AppCard";
import CurrencyConverterCard from "@/components/personal/CurrencyConverterCard";
import DescriptionCard from "@/components/personal/DescriptionCard";
import Features from "@/components/personal/Features";
import Locations from "@/components/personal/Locations";
import OrdersCard from "@/components/personal/OrdersCard";
import ServicesCard from "@/components/personal/ServicesCard";
import getCurrencies from "@/data/api/getCurrencies";
import getCurrenciesRate from "@/data/api/getCurrenciesRate";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    cardType: string;
    convertFrom: string;
    convertTo: string;
  }>;
}) {
  const [params, allCurrencies] = await Promise.all([
    searchParams,
    getCurrencies(),
  ]);

  const exchangeRate = await getCurrenciesRate(
    `${params.convertFrom || "usd"}`,
    `${params.convertTo || "eur"}`,
  );

  return (
    <>
      <DescriptionCard />
      <Features />
      <CurrencyConverterCard
        params={params}
        allCurrencies={allCurrencies || []}
        exchangeRate={exchangeRate}
      />
      <ServicesCard />
      <OrdersCard urlCardType={params.cardType || "standard"} />
      <Locations />
      <AppCard />
    </>
  );
}
