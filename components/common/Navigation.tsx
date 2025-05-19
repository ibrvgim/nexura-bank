"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { PrimaryButton, SecondaryButton } from "./Buttons";

function Navigation() {
  const pathname = usePathname();
  const darkNavigation = pathname.includes("business");

  return (
    <nav
      className={`flex w-full items-center px-20 py-6 text-[15px] ${darkNavigation ? "bg-green-900 text-white" : "bg-white"}`}
    >
      <Logo style={darkNavigation ? "white" : "green"} />

      <ul className="ml-10 flex gap-1">
        <li>
          <NavLink path="/">Personal</NavLink>
        </li>

        <li>
          <NavLink path="/business">Business</NavLink>
        </li>

        <li>
          <NavLink path="/enterprise">Enterprise</NavLink>
        </li>
      </ul>

      <ul className="ml-auto flex items-center gap-1">
        <li>
          <NavLink path="">Features</NavLink>
        </li>

        <li>
          <NavLink path="">Price</NavLink>
        </li>

        <li>
          <NavLink path="">Contact</NavLink>
        </li>
      </ul>

      <ul className="ml-10 flex items-center gap-3">
        <li>
          <SecondaryButton path="" isStyleLight={darkNavigation}>
            Log in
          </SecondaryButton>
        </li>

        <li>
          <PrimaryButton path="" isStyleLight={darkNavigation}>
            Create an Account
          </PrimaryButton>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
