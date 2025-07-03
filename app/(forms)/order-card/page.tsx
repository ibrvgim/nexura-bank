import ChooseCardMenu from "@/components/forms/order-card/ChooseCardMenu";
import OrderCardFormContainer from "@/components/forms/order-card/OrderCardFormContainer";
import { getCountries } from "@/data/api/getCountries";
import { createClient } from "@/data/supabase/server";
import { getUserData } from "@/data/users-data/getUserData";
import { UserDataType } from "@/types/types";
import { redirect } from "next/navigation";

const cards = [
  {
    image: "standard.png",
    type: "standard",
    price: 7,
  },

  {
    image: "premium.png",
    type: "premium",
    price: 14,
  },

  {
    image: "platinum.png",
    type: "platinum",
    price: 28,
  },
];

async function OrderCard({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) {
  const supabase = await createClient();

  const { type } = await searchParams;
  const userData = await getUserData();
  const allCountries = await getCountries();

  const { data: debitCards } = await supabase.from("debit_cards").select("*");

  const currentUserDebitCard = debitCards?.find(
    (item) => item.user_id === userData?.id,
  )?.cardType;

  if (currentUserDebitCard) redirect("/cards");

  return (
    <div className="mx-auto mt-12 mb-24">
      {type ? (
        <OrderCardFormContainer
          type={type}
          userData={userData.user_metadata as UserDataType}
          cardPrice={cards.find((item) => item.type === type)?.price || 0}
          allCountries={allCountries}
        />
      ) : (
        <ChooseCardMenu cards={cards} />
      )}
    </div>
  );
}

export default OrderCard;
