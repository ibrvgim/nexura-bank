import AppCard from "@/components/personal/AppCard";
import CurrencyConverterCard from "@/components/personal/CurrencyConverterCard";
import DescriptionCard from "@/components/personal/DescriptionCard";
import Features from "@/components/personal/Features";
import Locations from "@/components/personal/Locations";
import OrdersCard from "@/components/personal/OrdersCard";
import ServicesCard from "@/components/personal/ServicesCard";

export default function Home() {
  return (
    <main className="px-20 pt-16">
      <DescriptionCard />
      <Features />
      <CurrencyConverterCard />
      <ServicesCard />
      <OrdersCard />
      <Locations />
      <AppCard />
    </main>
  );
}
