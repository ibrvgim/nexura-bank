import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const paths = [
  {
    title: "Send Money",
    path: "/send-money",
  },

  {
    title: "Add Money",
    path: "/add-money",
  },

  {
    title: "Debit Cards",
    path: "/cards",
  },
];

function DropdownNavLink({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const htmlElement = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  useClickOutside(htmlElement, closeDropdown, dropdownOpen);

  const isBusinessPage = pathname.includes("business");

  return (
    <div className="relative" ref={htmlElement}>
      <button
        className="flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 text-[15px] tracking-wide transition-all duration-300"
        onClick={toggleDropdown}
      >
        {children}
        <ChevronDownIcon
          className={`inline-block size-3 leading-0 ${isBusinessPage ? "text-white" : "text-gray-900"}`}
        />
      </button>

      {dropdownOpen && (
        <ul className="absolute top-12 right-1 flex w-72 flex-col items-start gap-4 rounded-xl border border-green-100 bg-white pb-6 text-gray-800 shadow-md">
          <span className="relative mb-2 flex w-full items-center gap-3 rounded-t-xl bg-green-200 px-6 py-8">
            <Image
              src="/icons/features.png"
              alt="nexura logo"
              height={47}
              width={47}
            />
            <p className="text-[15px] text-gray-700">
              Explore the features used by millions globally.
            </p>

            <span className="absolute -top-1 right-3 z-10 size-4 rotate-45 bg-green-200">
              &nbsp;
            </span>
          </span>

          {paths.map((item: { title: string; path: string }) => (
            <li key={item.path} role="button" onClick={closeDropdown}>
              <Link
                href={item.path}
                target="_blank"
                className="group flex items-center pl-6 font-light"
              >
                {item.title}{" "}
                <ChevronRightIcon className="size-4 opacity-0 transition-all duration-300 group-hover:translate-x-3 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownNavLink;
