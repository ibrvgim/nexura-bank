import Image from "next/image";
import Link from "next/link";

function WhyNexuraCard() {
  return (
    <div className="-mx-20 flex items-center justify-between gap-10 bg-green-400 px-20 py-10">
      <div className="flex-1">
        <Image
          src="/images/various-layout.webp"
          alt="various layout image"
          height={650}
          width={650}
          draggable={false}
        />
      </div>

      <div className="flex-1">
        <p className="mb-7 text-7xl leading-20 font-extrabold tracking-wide text-gray-800">
          Why Nexura Business?
        </p>
        <p className="mb-10 text-lg font-light tracking-wide text-gray-800">
          With Nexura Business, you are able to hold money in 40+ currencies,
          and convert between them at the mid-market rate whenever you need.
          It’s free to register, and there are no monthly fees. Enabling
          seamless and efficient transactions between employees and customers
          through integrated web and mobile applications for streamlined payment
          management.
        </p>

        <Link
          href=""
          className="inline-block rounded-full border-3 border-gray-800 bg-gray-800 px-10 py-2 font-medium tracking-wide text-green-400 transition-all duration-500 hover:bg-transparent hover:text-gray-800"
        >
          How to Register Business Account
        </Link>
      </div>
    </div>
  );
}

export default WhyNexuraCard;
