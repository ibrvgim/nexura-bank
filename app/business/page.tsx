import BusinessHeadingCard from "@/components/business/BusinessHeadingCard";
import BusinessTypesCard from "@/components/business/BusinessTypesCard";
import FrequentlyAskedQuestions from "@/components/business/FrequentlyAskedQuestions";
import PayEmployeeCard from "@/components/business/PayEmployeeCard";
import SavingsCard from "@/components/business/SavingsCard";
import WhyNexuraCard from "@/components/business/WhyNexuraCard";
import InfoCard from "@/components/business/InfoCard";

function Business() {
  return (
    <main className="mx-auto max-w-[110rem]">
      <BusinessHeadingCard />

      <div className="px-20">
        <SavingsCard />
        <PayEmployeeCard />
        <WhyNexuraCard />
        <BusinessTypesCard />
        <FrequentlyAskedQuestions />
        <InfoCard />
      </div>
    </main>
  );
}

export default Business;
