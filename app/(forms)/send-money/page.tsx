import FormContainer from "@/components/forms/FormContainer";
import getCurrencies from "@/data/getCurrencies";
import { CurrencyItem } from "@/types/types";

async function SendMoney() {
  const allCurrencies: CurrencyItem[] = (await getCurrencies()) || [];

  return (
    <div className="mt-12 mb-24">
      <FormContainer allCurrencies={allCurrencies} />
    </div>
  );
}

export default SendMoney;
