import Logo from "./Logo";
import NavLink from "./NavLink";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function Navigation() {
  return (
    <nav className="flex items-center px-20 py-8 text-[15px]">
      <Logo />

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

      <ul className="ml-auto flex gap-1">
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
          <SecondaryButton path="">Log in</SecondaryButton>
        </li>

        <li>
          <PrimaryButton path="">Create a Bank Account</PrimaryButton>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
