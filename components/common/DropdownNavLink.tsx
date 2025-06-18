import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import FeaturesContainer from "./FeaturesContainer";

function DropdownNavLink({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const htmlElement = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  useClickOutside(htmlElement, closeDropdown, dropdownOpen);

  const isBusinessPage = pathname.includes("business");
  const isEnterprisePage = pathname.includes("enterprise");

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
        <FeaturesContainer
          isEnterprisePage={isEnterprisePage}
          closeDropdown={closeDropdown}
        />
      )}
    </div>
  );
}

export default DropdownNavLink;
