import AppCard from "@/components/personal/AppCard";
import CurrencyConverterCard from "@/components/personal/CurrencyConverterCard";
import DescriptionCard from "@/components/personal/DescriptionCard";
import Features from "@/components/personal/Features";
import Locations from "@/components/personal/Locations";
import OrdersCard from "@/components/personal/OrdersCard";
import ServicesCard from "@/components/personal/ServicesCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    cardType: string;
    convertFrom: string;
    convertTo: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <>
      <DescriptionCard />
      <Features />
      <CurrencyConverterCard params={params} />
      <ServicesCard />
      <OrdersCard urlCardType={params.cardType || "standard"} />
      <Locations />
      <AppCard />
    </>
  );
}
