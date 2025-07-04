import CardsList from "@/components/authorized/cards/CardsList";
import DebitCardDetails from "@/components/authorized/cards/DebitCardDetails";
import { createClient } from "@/data/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debit Cards",
};

async function Cards() {
  const supabase = await createClient();
  const { data: debitCards } = await supabase.from("debit_cards").select("*");
  const { data } = await supabase.auth.getUser();

  const currentUserDebitCard = debitCards?.find(
    (item) => item.user_id === data.user?.id,
  );

  return (
    <>
      {currentUserDebitCard?.cardType ? (
        <DebitCardDetails currentUserDebitCard={currentUserDebitCard} />
      ) : (
        <CardsList />
      )}
    </>
  );
}

export default Cards;
