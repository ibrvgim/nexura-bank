import SendMoneyContainer from "@/components/forms/send-money/SendMoneyContainer";
import getCurrencies from "@/data/api/getCurrencies";

async function SendMoney({
  searchParams,
}: {
  searchParams: Promise<{
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  }>;
}) {
  const [allCurrencies, params] = await Promise.all([
    getCurrencies(),
    searchParams,
  ]);

  return (
    <div className="mt-12 mb-24">
      <SendMoneyContainer allCurrencies={allCurrencies || []} params={params} />
    </div>
  );
}

export default SendMoney;
