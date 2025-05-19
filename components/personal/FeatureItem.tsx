import Image from "next/image";

function FeatureItem({
  image,
  imageSize,
  title,
  description,
}: {
  image: string;
  imageSize: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <Image
        src={`/illustrations/${image}`}
        alt={title.toLowerCase()}
        height={imageSize}
        width={imageSize}
        className="mx-auto mb-10"
        draggable={false}
      />

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
