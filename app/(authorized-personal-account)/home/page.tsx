import BalanceCard from "@/components/authorized/home/BalanceCard";
import ProtectionInformation from "@/components/authorized/home/ProtectionInformation";
import TransactionsOverview from "@/components/authorized/home/TransactionsOverview";
import TransferMoney from "@/components/authorized/home/TransferMoney";
import getCurrencies from "@/data/api/getCurrencies";
import getCurrenciesRate from "@/data/api/getCurrenciesRate";
import { ConverterDataType } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

async function AuthorizedHome({
  searchParams,
}: {
  searchParams: Promise<ConverterDataType>;
}) {
  const [converterData, allCurrencies] = await Promise.all([
    searchParams,
    getCurrencies(),
  ]);

  const currencyRate = await getCurrenciesRate(
    converterData.from || "usd",
    converterData.to || "eur",
  );

  return (
    <>
      <BalanceCard />
      <TransactionsOverview />
      <TransferMoney
        converterData={converterData}
        allCurrencies={allCurrencies || []}
        currencyRate={currencyRate}
      />
      <ProtectionInformation />
    </>
  );
}

export default AuthorizedHome;
