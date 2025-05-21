import {
  InformationCircleIcon,
  ArrowsRightLeftIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <ArrowsRightLeftIcon />,
    title: "Easily integrate our end-to-end solution",
    description:
      "Simplify your operations with tools that seamlessly connect with your existing apps and future service providers.",
  },
  {
    icon: <GlobeAltIcon />,
    title: "Tap into valuable global insights",
    description:
      "Help reach customers and drive results with data powered by our two-sided network of shoppers and businesses.",
  },
  {
    icon: <InformationCircleIcon />,
    title: "Help keep your business future ready",
    description:
      "Customise our secure, data-driven solution with the features you need now and later.",
  },
  {
    icon: <CheckBadgeIcon />,
    title: "Get peace of mind ​with a trusted brand",
    description:
      "Some of leading companies have worked with us for 20+ years to do business with confidence.",
  },
];

function EnterpriseFeatures() {
  return (
    <section className="-mx-20 bg-gray-800 px-20 py-28 text-white">
      <ul className="flex justify-between gap-16 text-center *:flex-1">
        {features.map((item, index) => (
          <FeatureItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <li>
      <div className="mx-auto mb-7 size-15">{icon}</div>
      <p className="mb-5 text-xl font-medium">{title}</p>
      <p>{description}</p>
    </li>
  );
}

export default EnterpriseFeatures;
