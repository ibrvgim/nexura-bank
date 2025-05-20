import Link from "next/link";
import MarketStatistics from "./MarketStatistics";
import Image from "next/image";

function DescriptionCard() {
  return (
    <div className="flex items-center gap-5 border-b-2 border-b-gray-200 pb-30">
      <div className="tracking-wider">
        <MarketStatistics />

        <div className="flex flex-col gap-3 text-7xl font-extrabold text-gray-700 uppercase">
          <p>Experience</p>
          <p className="text-green-500">Modern Banking</p>
          <p>— Fast and Secure</p>
        </div>

        <p className="my-8 w-[90%] text-[17px] leading-8 text-gray-500">
          Create an account in minutes and use seamless transfers, payments, and
          savings. Our platform supports multiple currencies and enables fast,
          secure transactions across a wide range of countries — all in one
          intuitive interface.
        </p>

        <Link
          href=""
          className="inline-block border-b-2 border-b-gray-500 pb-1 text-gray-500 transition-all hover:border-b-green-500 hover:text-green-500"
        >
          Transfer Money Now
        </Link>
      </div>

      <div>
        <Image
          src="/illustrations/bank.svg"
          alt="currency image"
          height={1400}
          width={1400}
          draggable={false}
        />
        &nbsp;
      </div>
    </div>
  );
}

export default DescriptionCard;
