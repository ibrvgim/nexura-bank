import Logo from "./Logo";

function Footer() {
  const listsStyle =
    "flex gap-8 *:cursor-pointer *:transition-all *:duration-500 *:hover:text-green-900";

  return (
    <footer className="bg-green-400 px-20 py-16">
      <div className="inline-block">
        <Logo style="white" />
      </div>

      <div className="mt-12 text-white">
        <ul className={`${listsStyle} border-b-[1px] border-b-gray-100 pb-4`}>
          <li>Contact</li>
          <li>Fees</li>
          <li>Security</li>
          <li>Business Resource Centre</li>
          <li>Enterprise</li>
        </ul>

        <div className="flex justify-between pt-4">
          <ul className={listsStyle}>
            <li>About</li>
            <li>News</li>
            <li>Jobs</li>
            <li>Developers</li>
            <li>Partners</li>
            <li>Team</li>
          </ul>

          <div className="flex gap-8">
            <p>© 1999 – 2025</p>
            <ul className={listsStyle}>
              <li>Accessibility</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
