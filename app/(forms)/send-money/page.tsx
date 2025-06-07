import FormContainer from "@/components/forms/FormContainer";
import RecipientForm from "@/components/forms/send-money/RecipientForm";
// import SendMoneyAmountForm from "@/components/forms/send-money/SendMoneyAmountForm";
// import getCurrencies from "@/data/getCurrencies";
// import { CurrencyItem } from "@/types/types";

async function SendMoney({
  searchParams,
}: {
  searchParams: Promise<{ accountType: string }>;
}) {
  const { accountType } = await searchParams;
  // const allCurrencies: CurrencyItem[] = (await getCurrencies()) || [];

  return (
    <div className="mt-12 mb-24">
      <FormContainer>
        {/* <SendMoneyAmountForm allCurrencies={allCurrencies} /> */}
        <RecipientForm accountType={accountType || "eu"} />
      </FormContainer>
    </div>
  );
}

export default SendMoney;
