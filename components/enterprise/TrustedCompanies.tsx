import Image from "next/image";

const companies = [
  "/companies/bolt.svg",
  "/companies/nubank.svg",
  "/companies/google-pay.svg",
  "/companies/monzo.svg",
  "/companies/standard-chartered.svg",
];

function TrustedCompanies() {
  return (
    <div className="py-30">
      <p className="text-center text-4xl font-bold tracking-wide text-gray-700 uppercase">
        Join leading organisations that work with us
      </p>

      <ul className="mt-20 flex items-center justify-between gap-5">
        {companies.map((item, index) => (
          <CompanyItem key={index} logo={item} />
        ))}
      </ul>
    </div>
  );
}

function CompanyItem({ logo }: { logo: string }) {
  return (
    <li className="relative flex-1 py-6">
      <Image
        src={logo}
        alt="trusted company logo"
        fill
        className="object-contain"
        draggable={false}
      />
    </li>
  );
}

export default TrustedCompanies;
