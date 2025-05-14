import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function MarketStatistics() {
  return (
    <div className="mb-5 flex gap-7">
      <MarketItem
        marketName="Apple Store"
        downloads="3.2"
        rating="4.8"
        icon="app-store"
      />

      <MarketItem
        marketName="Google Play"
        downloads="5.8"
        rating="4.6"
        icon="google-play"
      />
    </div>
  );
}

function MarketItem({
  marketName,
  icon,
  rating,
  downloads,
}: {
  marketName: string;
  icon: string;
  rating: string;
  downloads: string;
}) {
  return (
    <Link href="" className="flex items-center gap-2">
      <Image
        src={`/icons/${icon}.png`}
        alt={marketName.toLowerCase()}
        height={100}
        width={20}
      />

      <p className="text-sm font-medium text-gray-700">
        {rating} <StarIcon className="inline-block size-3" /> on{" "}
        <span className="">{marketName}</span>{" "}
        <span className="text-gray-400">| {downloads}M downloads</span>
      </p>
    </Link>
  );
}

export default MarketStatistics;
