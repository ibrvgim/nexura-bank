import Image from "next/image";

function FlagImageContainer({
  url,
  alt,
  size = 25,
  style,
}: {
  url: string;
  alt: string;
  size?: number;
  style?: string;
}) {
  return (
    <Image src={url} alt={alt} width={size} height={size} className={style} />
  );
}

export default FlagImageContainer;
