import ArticlesCard from "@/components/enterprise/ArticlesCard";
import DeveloperDocumentation from "@/components/enterprise/DeveloperDocumentation";
import EnterpriseFeatures from "@/components/enterprise/EnterpriseFeatures";
import EnterpriseHeadingCard from "@/components/enterprise/EnterpriseHeadingCard";
import TrustedCompanies from "@/components/enterprise/TrustedCompanies";

function Enterprise() {
  return (
    <main className="px-20 pt-16">
      <EnterpriseHeadingCard />
      <EnterpriseFeatures />
      <TrustedCompanies />
      <ArticlesCard />
      <DeveloperDocumentation />
    </main>
  );
}

export default Enterprise;
