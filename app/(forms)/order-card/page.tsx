import ChooseCardMenu from "@/components/forms/order-card/ChooseCardMenu";
import OrderCardFormContainer from "@/components/forms/order-card/OrderCardFormContainer";

async function OrderCard({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) {
  const { type } = await searchParams;

  return (
    <div className="mx-auto mt-12 mb-24">
      {type ? <OrderCardFormContainer type={type} /> : <ChooseCardMenu />}
    </div>
  );
}

export default OrderCard;
