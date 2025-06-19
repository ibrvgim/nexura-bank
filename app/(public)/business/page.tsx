import BusinessHeadingCard from "@/components/business/BusinessHeadingCard";
import BusinessTypesCard from "@/components/business/BusinessTypesCard";
import FrequentlyAskedQuestions from "@/components/business/FrequentlyAskedQuestions";
import PayEmployeeCard from "@/components/business/PayEmployeeCard";
import SavingsCard from "@/components/business/SavingsCard";
import WhyNexuraCard from "@/components/business/WhyNexuraCard";
import InfoCard from "@/components/business/InfoCard";
import getCurrencies from "@/data/api/getCurrencies";
import getCurrenciesRate from "@/data/api/getCurrenciesRate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexura Business",
};

async function Business({
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
      <BusinessHeadingCard />
      <SavingsCard />
      <PayEmployeeCard
        params={params}
        allCurrencies={allCurrencies || []}
        exchangeRate={exchangeRate}
      />
      <WhyNexuraCard />
      <BusinessTypesCard />
      <FrequentlyAskedQuestions />
      <InfoCard />
    </>
  );
}

export default Business;
