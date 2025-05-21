import ArticlesCard from "@/components/enterprise/ArticlesCard";
import DeveloperDocumentation from "@/components/enterprise/DeveloperDocumentation";
import EnterpriseFeatures from "@/components/enterprise/EnterpriseFeatures";
import EnterpriseHeadingCard from "@/components/enterprise/EnterpriseHeadingCard";
import TrustedCompanies from "@/components/enterprise/TrustedCompanies";

function Enterprise() {
  return (
    <>
      <EnterpriseHeadingCard />
      <EnterpriseFeatures />
      <TrustedCompanies />
      <ArticlesCard />
      <DeveloperDocumentation />
    </>
  );
}

export default Enterprise;
