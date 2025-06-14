import AddMoneyContainer from "@/components/forms/add-money/AddMoneyContainer";
import getCurrencies from "@/data/api/getCurrencies";

async function AddMoney() {
  const allCurrencies = await getCurrencies();

  return (
    <div className="mt-16 mb-10">
      <AddMoneyContainer allCurrencies={allCurrencies || []} />
    </div>
  );
}

export default AddMoney;
