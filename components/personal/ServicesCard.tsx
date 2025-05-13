import { BoltIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function ServicesCard() {
  const containerStyle =
    "flex-1 bg-green-900 rounded-2xl text-white py-14 px-16";
  const iconStyle = "mx-auto mb-7 size-20 text-green-200";
  const titleStyle =
    "uppercase font-extrabold text-4xl text-center mb-7 text-green-200";
  const descriptionStyle = "text-center text-[17px] tracking-wide leading-8";
  const buttonsContainerStyle = "mt-10 flex items-center justify-center gap-3";

  return (
    <div className="flex gap-5 py-30">
      <div className={containerStyle}>
        <BriefcaseIcon className={iconStyle} />
        <p className={titleStyle}>Boost your business to new levels</p>
        <p className={descriptionStyle}>
          Register for the fast, easy international business account that saves
          you money wherever you want to use it.
        </p>

        <div className={buttonsContainerStyle}>
          <Button>Create a Business Account</Button>
          <Button primary={false}>Try Demo</Button>
        </div>
      </div>

      <div className={containerStyle}>
        <BoltIcon className={iconStyle} />
        <p className={titleStyle}>Infrastructure to power the world’s money</p>
        <p className={descriptionStyle}>
          Connecting banks, financial institutions and enterprises to the
          next-generation payment solutions.
        </p>

        <div className={buttonsContainerStyle}>
          <Button primary={false}>Get in Touch</Button>
        </div>
      </div>
    </div>
  );
}

function Button({
  children,
  primary = true,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href=""
      className={`rounded-full border-2 px-8 py-1 font-medium text-gray-700 transition-all duration-500 ${primary ? "border-green-200 bg-green-200 hover:border-green-300 hover:bg-green-300" : "border-green-200 text-green-200 hover:border-green-300 hover:text-green-300"}`}
    >
      {children}
    </Link>
  );
}

export default ServicesCard;
