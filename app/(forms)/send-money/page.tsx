import SendMoneyContainer from "@/components/forms/send-money/SendMoneyContainer";
import getCurrencies from "@/data/api/getCurrencies";
import { CurrencyItem } from "@/types/types";

async function SendMoney({
  searchParams,
}: {
  searchParams: Promise<{
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  }>;
}) {
  const allCurrencies: CurrencyItem[] = (await getCurrencies()) || [];
  const params = await searchParams;

  return (
    <div className="mt-12 mb-24">
      <SendMoneyContainer allCurrencies={allCurrencies} params={params} />
    </div>
  );
}

export default SendMoney;
