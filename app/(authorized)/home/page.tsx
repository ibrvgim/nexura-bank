import BalanceCard from "@/components/authorized/home/BalanceCard";
import TransactionsOverview from "@/components/authorized/home/TransactionsOverview";
import TransferMoney from "@/components/authorized/home/TransferMoney";

function AuthorizedHome() {
  return (
    <>
      <p className="text-3xl font-semibold tracking-wide text-gray-700">
        Welcome to Nexura, Imran!
      </p>

      <BalanceCard />
      <TransactionsOverview />
      <TransferMoney />
    </>
  );
}

export default AuthorizedHome;
