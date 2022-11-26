import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./header.module.scss";

// Data
const mainLinks = [
  ["Blog", "/blog"],
  ["Recipes", "/recipes"],
  ["Favorites", "/favorites"],
];
const secondaryLinks = [
  ["About", "#"],
  ["Contact", "#"],
];

// Components
type NavItemProps = {
  href: string;
  main?: boolean;
  children: React.ReactNode;
};

const NavItem = ({ href, main, children }: NavItemProps) => {
  return (
    <li
      className={`

        uppercase
        ${main || `text-sm`}
        

        ${main && `border-b-2 border-yellow-700 text-base lg:text-lg`}
        

      
    `}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  /* useEffect(() => {
    console.log(window.scrollY);

  },)

  window.addEventListener('scroll', (ev) => checkScrollY(ev))

  const checkScrollY = (ev) => {
    setScrolledDown(window.scrollY >= 300)
  } */

  return (
    <>
      <header
        className={`flex flex-col items-center px-4 pt-5 pb-2 sm:pb-0 ${
          navbarOpen || `border-b border-yellow-700`
        } sm:border-0 bg-white`}
      >
        <nav
          className={`
            flex items-center justify-between
            sm:grid sm:grid-cols-3 lg:items-start 
            
            w-full lg:w-4/5 mb-2
          `}
        >
          <div className="hidden sm:flex flex-grow">
            <ul className="flex gap-4 mr-auto">
              {secondaryLinks.map(([name, route], i) => (
                <NavItem key={`secondary-nav-item-${i}`} href={route}>
                  {name}
                </NavItem>
              ))}
            </ul>
          </div>
          <div
            className={`${styles.brand} flex sm:justify-center flex-grow text-3xl lg:text-5xl font-bold whitespace-nowrap uppercase transition-all duration-700`}
          >
            <span className="text-blue-500">Salvador</span>
            <span className="text-yellow-700">Indian</span>
          </div>
          <div className="flex flex-grow">
            <ul className="flex gap-4 ml-auto">
              <li className="cursor-pointer">
                <Icon icon="ic:outline-light-mode" width={25} height={25} />
              </li>
              <li className="sm:hidden cursor-pointer">
                <Icon
                  icon="quill:hamburger"
                  width={25}
                  height={25}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                />
              </li>
              {/* <li><Icon icon="akar-icons:gear" width={25} height={25} /></li> */}
            </ul>
          </div>
        </nav>
      </header>
      <header
        className={`sticky top-0 ${
          navbarOpen || `hidden`
        } sm:flex flex-col items-center px-4 py-4 bg-white shadow-md border-b border-yellow-700`}
      >
        <nav className="sticky top-0 flex flex-col justify-start items-center gap-6 lg:w-4/5">
          <ul className="sm:hidden flex gap-4">
            {secondaryLinks.map(([name, route], i) => (
              <NavItem key={`secondary-nav-item-${i}`} href={route}>
                {name}
              </NavItem>
            ))}
          </ul>

          <ul className="flex gap-8">
            {mainLinks.map(([name, route], i) => (
              <NavItem key={`nav-item-${i}`} href={route} main>
                {name}
              </NavItem>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
