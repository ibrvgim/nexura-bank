import CardsList from "@/components/authorized/cards/CardsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debit Cards",
};

function Cards() {
  return (
    <>
      <CardsList />
    </>
  );
}

export default Cards;
