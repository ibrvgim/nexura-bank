import BusinessHeadingCard from "@/components/business/BusinessHeadingCard";
import BusinessTypesCard from "@/components/business/BusinessTypesCard";
import FrequentlyAskedQuestions from "@/components/business/FrequentlyAskedQuestions";
import PayEmployeeCard from "@/components/business/PayEmployeeCard";
import SavingsCard from "@/components/business/SavingsCard";
import WhyNexuraCard from "@/components/business/WhyNexuraCard";
import InfoCard from "@/components/business/InfoCard";

function Business() {
  return (
    <main className="px-20">
      <BusinessHeadingCard />
      <SavingsCard />
      <PayEmployeeCard />
      <WhyNexuraCard />
      <BusinessTypesCard />
      <FrequentlyAskedQuestions />
      <InfoCard />
    </main>
  );
}

export default Business;
