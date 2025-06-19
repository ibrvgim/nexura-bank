"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import DropdownNavLink from "./DropdownNavLink";

function Navigation({ isUserLoggedIn }: { isUserLoggedIn: boolean }) {
  const pathname = usePathname();
  const isCurrentBusiness = pathname.includes("business");
  const isCurrentEnterprise = pathname.includes("enterprise");

  return (
    <nav
      className={`flex w-full items-center px-20 py-8 text-[15px] ${isCurrentBusiness ? "bg-green-900 text-white" : "bg-white"}`}
    >
      <Logo
        style={
          isCurrentBusiness ? "white" : isCurrentEnterprise ? "black" : "green"
        }
      />

      <ul className="ml-10 flex gap-1">
        <li>
          <NavLink path="/">Personal</NavLink>
        </li>

        <li>
          <NavLink path="/business">Business</NavLink>
        </li>

        <li
          className={`${isCurrentEnterprise ? "*:bg-gray-800 *:text-white" : ""}`}
        >
          <NavLink path="/enterprise">Enterprise</NavLink>
        </li>
      </ul>

      <ul className="ml-auto flex items-center gap-1">
        <li>
          <DropdownNavLink>Features</DropdownNavLink>
        </li>

        <li>
          <NavLink path="/contact">Contact</NavLink>
        </li>
      </ul>

      <ul className="ml-10 flex items-center gap-3">
        {!isCurrentEnterprise && !isUserLoggedIn && (
          <li>
            <SecondaryButton path="/login" isStyleLight={isCurrentBusiness}>
              Log in
            </SecondaryButton>
          </li>
        )}

        {(!isUserLoggedIn || isCurrentEnterprise) && (
          <li
            className={`${isCurrentEnterprise ? "text-white *:border-gray-800 *:bg-gray-800 *:hover:border-gray-700 *:hover:bg-transparent *:hover:text-gray-800" : ""}`}
          >
            <PrimaryButton
              path={isCurrentEnterprise ? "" : "/register"}
              isStyleLight={isCurrentBusiness}
            >
              {isCurrentEnterprise ? "Get in Touch" : "Create an Account"}
            </PrimaryButton>
          </li>
        )}

        {isUserLoggedIn && !isCurrentEnterprise && (
          <li className="*:px-10">
            <SecondaryButton path="/home" isStyleLight={isCurrentBusiness}>
              My Account
            </SecondaryButton>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
