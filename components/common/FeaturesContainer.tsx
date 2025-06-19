import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    title: "Send Money",
    path: "send-money",
  },

  {
    title: "Add Money",
    path: "add-money",
  },

  {
    title: "Debit Cards",
    path: "cards",
  },
];

function FeaturesContainer({
  isEnterprisePage,
  closeDropdown,
}: {
  isEnterprisePage: boolean;
  closeDropdown: () => void;
}) {
  return (
    <ul className="absolute top-12 right-1 flex min-w-72 flex-col items-start gap-4 rounded-xl bg-white pb-6 text-gray-800 shadow-lg">
      <span
        className={`relative mb-2 flex w-full items-center gap-4 rounded-t-xl px-6 py-8 ${isEnterprisePage ? "bg-gray-800" : "bg-green-500"}`}
      >
        <Image src="/icons/coin.png" alt="nexura logo" height={40} width={40} />
        <p className="text-[15px] text-white">
          Explore the features used by millions globally.
        </p>

        <span
          className={`absolute -top-1 right-3 z-10 size-4 rotate-45 ${isEnterprisePage ? "bg-gray-800" : "bg-green-500"}`}
        >
          &nbsp;
        </span>
      </span>

      {paths.map((item: { title: string; path: string }) => (
        <li key={item.path} role="button" onClick={closeDropdown}>
          <Link
            href={`/${item.path}`}
            className="group ml-8 flex items-center font-light"
          >
            {item.title}{" "}
            <ChevronRightIcon className="size-4 opacity-0 transition-all duration-300 group-hover:translate-x-3 group-hover:opacity-100" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FeaturesContainer;
