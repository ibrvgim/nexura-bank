import SendMoneyContainer from "@/components/forms/send-money/SendMoneyContainer";
import getCurrencies from "@/data/api/getCurrencies";
import { createClient } from "@/data/supabase/server";

async function SendMoney({
  searchParams,
}: {
  searchParams: Promise<{
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  }>;
}) {
  const supabase = await createClient();
  const [allCurrencies, params] = await Promise.all([
    getCurrencies(),
    searchParams,
  ]);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: usersBalance } = await supabase
    .from("users_balance")
    .select("*");

  const currentUserBalance = usersBalance?.find(
    (item) => item.user_id === user?.id,
  ).personalAccountBalance;

  return (
    <div className="mt-12 mb-24">
      <SendMoneyContainer
        currentUserBalance={currentUserBalance}
        allCurrencies={allCurrencies || []}
        params={params}
      />
    </div>
  );
}

export default SendMoney;
