import Image from "next/image";

function FeatureItem({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="relative mb-10 h-30">
        <Image
          src={`/illustrations/${image}`}
          alt={title.toLowerCase()}
          fill
          className="object-contain"
          draggable={false}
        />
      </div>

      <div>
        <p className="mb-4 text-lg font-semibold tracking-wider text-gray-700 uppercase">
          {title}
        </p>
        <p className="leading-7 text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
