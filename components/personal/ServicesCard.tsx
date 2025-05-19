import { BoltIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "../common/Buttons";

function ServicesCard() {
  const iconStyle = "mx-auto mb-7 size-20 text-green-200";

  return (
    <div className="flex gap-5 py-30">
      <ServiceItem
        icon={<BriefcaseIcon className={iconStyle} />}
        title="Boost your business to new areas"
        description="Register for the fast, easy international business account that saves
          you money wherever you want to use it."
      >
        <PrimaryButton path="" isStyleLight>
          Create a Business Account
        </PrimaryButton>

        <SecondaryButton path="" isStyleLight>
          Try Demo
        </SecondaryButton>
      </ServiceItem>

      <ServiceItem
        icon={<BoltIcon className={iconStyle} />}
        title="Infrastructure to power the world’s money"
        description="Connecting banks, financial institutions and enterprises to the
          next-generation payment solutions."
      >
        <SecondaryButton path="" isStyleLight>
          Get in Touch
        </SecondaryButton>
      </ServiceItem>
    </div>
  );
}

function ServiceItem({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 rounded-2xl bg-green-900 px-16 py-14 text-white">
      {icon}
      <p className="mb-7 text-center text-4xl font-extrabold text-green-200 uppercase">
        {title}
      </p>
      <p className="text-center text-[17px] leading-8 tracking-wide">
        {description}
      </p>

      <div className="mt-10 flex items-center justify-center gap-3">
        {children}
      </div>
    </div>
  );
}

export default ServicesCard;
