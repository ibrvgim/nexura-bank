import Image from "next/image";
import Link from "next/link";

function Logo({ path, style = "green" }: { path?: string; style?: string }) {
  return (
    <Link href={path || "/"}>
      <Image
        src={`/logos/logo_${style}.png`}
        alt="nexura-bank-logo"
        width={150}
        height={150}
      />
    </Link>
  );
}

export default Logo;
