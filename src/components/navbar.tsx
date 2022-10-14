import Link from "next/link";
import { useState } from "react";

// Data
const links = [
  ["#", "Blog"],
  ["#", "Recipes"],
  ["#", "Ingredients"],
  ["#", "About"],
  ["#", "Contact Us"],
];

// Components

const NavItem = ({ href, children }) => {
  return (
    <li className="px-2 py-2 text-white text-sm hover:opacity-75">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-400">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <a
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="#pablo"
          >
            Salvadorindian
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div>open</div>
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
      </div>
    </nav>
  );
}
