import BalanceCard from "@/components/authorized/home/BalanceCard";
import ProtectionInformation from "@/components/authorized/home/ProtectionInformation";
import TransactionsOverview from "@/components/authorized/home/TransactionsOverview";
import TransferMoney from "@/components/authorized/home/TransferMoney";
import ConverterData from "@/types/types";

async function AuthorizedHome({
  searchParams,
}: {
  searchParams: Promise<ConverterData>;
}) {
  const converterData = await searchParams;

  return (
    <>
      <p className="text-3xl font-semibold tracking-wide text-gray-700">
        Welcome to Nexura, Imran!
      </p>

      <BalanceCard />
      <TransactionsOverview />
      <TransferMoney converterData={converterData} />
      <ProtectionInformation />
    </>
  );
}

export default AuthorizedHome;
