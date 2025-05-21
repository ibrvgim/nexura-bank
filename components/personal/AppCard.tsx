import Link from "next/link";
import MarketStatistics from "./MarketStatistics";
import Image from "next/image";

function AppCard() {
  return (
    <section className="mx-auto w-1/2 py-30 text-center">
      <div className="*:justify-center">
        <MarketStatistics />
      </div>
      <p className="text-7xl font-extrabold text-gray-700 uppercase">
        Everything you need - <span className="text-green-500">Nexura</span>
      </p>

      <Image
        src="/icons/qr-code.png"
        alt="nexura app qr-code"
        height={130}
        width={130}
        className="mx-auto my-5"
        draggable={false}
      />

      <div className="mt-5 flex items-center justify-center">
        <Icon
          icon="app-store-download.png"
          market="apple store"
          path="https://www.apple.com/de/app-store/"
          size={120}
        />

        <Icon
          icon="google-play-download.png"
          market="google play"
          path="https://play.google.com/store"
          size={150}
        />
      </div>
    </section>
  );
}

function Icon({
  path,
  icon,
  size,
  market,
}: {
  path: string;
  icon: string;
  size: number;
  market: string;
}) {
  return (
    <Link href={path} target="_blank">
      <Image
        src={`/icons/${icon}`}
        alt={`${market} download icon`}
        height={size}
        width={size}
        draggable={false}
      />
    </Link>
  );
}

export default AppCard;
