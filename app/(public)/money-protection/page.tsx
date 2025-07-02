import {
  LockClosedIcon,
  ShieldCheckIcon,
  BellAlertIcon,
  InformationCircleIcon,
  CubeTransparentIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

function MoneyProtection() {
  const iconStyle = "mb-4 size-8 mx-auto";

  return (
    <section className="my-20">
      <p className="text-center text-5xl font-extrabold tracking-wider text-gray-700 uppercase">
        Money Protection at Nexura
      </p>
      <p className="mx-auto mt-6 w-1/2 text-center font-light tracking-wide text-gray-500">
        We are committed to safeguarding every penny you deposit by combining
        advanced technology, robust policies, and dedicated customer support.
      </p>

      <ul className="mt-16 grid grid-cols-2 gap-x-5 gap-y-7">
        <ListItem
          title="State-of-the-Art Security"
          icon={<LockClosedIcon className={iconStyle} />}
        >
          We use industry-leading encryption, secure authentication protocols,
          and real-time fraud monitoring systems to ensure that your money and
          data remain safe from unauthorized activity.
        </ListItem>

        <ListItem
          title="Deposit Protection"
          icon={<ShieldCheckIcon className={iconStyle} />}
        >
          All customer funds are held securely. Nexura partners only with
          trusted financial institutions and complies with applicable financial
          regulations to provide an added layer of protection to your deposits.
        </ListItem>

        <ListItem
          title="Real-Time Monitoring & Alerts"
          icon={<BellAlertIcon className={iconStyle} />}
        >
          Our systems constantly monitor for suspicious activity. If we detect
          anything unusual, we will alert you instantly and take immediate steps
          to protect your account.
        </ListItem>

        <ListItem
          title="Always Here to Help"
          icon={<InformationCircleIcon className={iconStyle} />}
        >
          Our customer support team is available 24/7 to assist you with any
          questions or concerns. Whether it’s a transaction you don’t recognize
          or help accessing your account, we are just a message or call away.
        </ListItem>

        <ListItem
          title="Transparent Practices"
          icon={<CubeTransparentIcon className={iconStyle} />}
        >
          We believe in full transparency. No hidden fees. No surprises. You’ll
          always know what’s happening with your money.
        </ListItem>

        <ListItem
          title="Full Control"
          icon={<WrenchScrewdriverIcon className={iconStyle} />}
        >
          With Nexura, you are always in control of your finances. From locking
          your card instantly to managing spending limits and transaction types,
          our intuitive tools give you the power to protect your money your way.
        </ListItem>
      </ul>
    </section>
  );
}

function ListItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex min-h-60 flex-col items-center justify-center rounded-xl bg-stone-100 px-12 py-4">
      {icon}
      <p className="mb-2 text-center font-medium">{title}</p>
      <p className="text-center text-gray-500">{children}</p>
    </li>
  );
}

export default MoneyProtection;
