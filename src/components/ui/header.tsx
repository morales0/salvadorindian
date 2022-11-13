import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import styles from './header.module.scss'

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
  const [scrolledDown, setScrolledDown] = useState(false)

  /* useEffect(() => {
    console.log(window.scrollY);

  },)

  window.addEventListener('scroll', (ev) => checkScrollY(ev))

  const checkScrollY = (ev) => {
    setScrolledDown(window.scrollY >= 300)
  } */

  return (
    <header className="sticky top-0 flex flex-col items-center px-4 py-3 bg-white shadow-md">
      <nav className={`grid grid-cols-3 w-full lg:w-4/5 mb-2`}>
        <div className="flex flex-grow">
          <ul className="flex gap-4 mr-auto">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={`${styles.brand} flex justify-center flex-grow ${scrolledDown ? "text-2xl" : "text-4xl"} font-bold whitespace-nowrap uppercase transition-all duration-700`}>
          <span className="text-blue-500">Salvador</span><span className="text-yellow-700">Indian</span>
        </div>
        <div className="flex flex-grow">
          <ul className="flex gap-4 ml-auto">
            <li><Icon icon="ic:outline-light-mode" width={25} height={25} /></li>
            <li><Icon icon="akar-icons:gear" width={25} height={25} /></li>
          </ul>
        </div>
      </nav>

      <nav className="flex justify-center items-start lg:w-4/5">
        <ul className="flex gap-4">
          <li>Blog</li>
          <li>Recipes</li>
          <li>Favorites</li>
        </ul>
      </nav>

      {/* <nav className="w-4/5 px-4 mx-auto flex flex-wrap items-center justify-between">
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
      </nav> */}
    </header>
  );
}

export default Header;
