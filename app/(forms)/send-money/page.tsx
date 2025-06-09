import FormContainer from "@/components/forms/FormContainer";
import getCurrencies from "@/data/getCurrencies";
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
      <FormContainer allCurrencies={allCurrencies} params={params} />
    </div>
  );
}

export default SendMoney;
