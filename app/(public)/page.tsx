import AppCard from "@/components/personal/AppCard";
import CurrencyConverterCard from "@/components/personal/CurrencyConverterCard";
import DescriptionCard from "@/components/personal/DescriptionCard";
import Features from "@/components/personal/Features";
import Locations from "@/components/personal/Locations";
import OrdersCard from "@/components/personal/OrdersCard";
import ServicesCard from "@/components/personal/ServicesCard";

interface CardTypeData {
  cardType: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<CardTypeData>;
}) {
  const { cardType } = await searchParams;

  return (
    <>
      <DescriptionCard />
      <Features />
      <CurrencyConverterCard />
      <ServicesCard />
      <OrdersCard urlCardType={cardType || "standard"} />
      <Locations />
      <AppCard />
    </>
  );
}
