import Link from "next/link";
import { useState } from "react";

// Data
const links = [
  ["/blog", "Blog"],
  ["/recipes", "Recipes"],
  ["#", "About"],
  ["#", "Contact Us"],
];

// Components
type NavItemProps = {
  href: string,
  children: React.ReactNode
}

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li className="px-2 py-2 text-sm hover:opacity-75">
      <Link href={href}>{children}</Link>
    </li>
  );
};

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-md">
      <nav className="w-4/5 px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <Link href="/">
            <a className="text-lg text-yellow-700 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
              Salvadorindian
            </a>
          </Link>
          <button
            className={`cursor-pointer leading-none px-1 py-1 border border-solid border-transparent 
              rounded bg-transparent block md:hidden outline-none focus:outline-none`}
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {[0, 1, 2].map(k => (
              <div key={`hamburger-${k}`} className="w-7 h-1 m-1 border-solid rounded-lg bg-gray-800" />
            ))}
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col md:flex-row list-none md:ml-auto">
            {links.map(([href, label], i) => (
              <NavItem key={`navlink-${i}`} href={href}>
                {label}
              </NavItem>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
