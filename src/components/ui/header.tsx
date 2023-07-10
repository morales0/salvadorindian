import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./header.module.scss";
import NavItem from "./nav-item";

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

// Component
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky top-0 flex flex-col items-center px-4 pt-5 pb-2 sm:static sm:pb-0 ${
          navbarOpen || `border-b border-yellow-700`
        } bg-white sm:border-0`}
      >
        <nav
          className={`
            mb-2 flex w-full
            items-center justify-between sm:grid 
            
            sm:grid-cols-3 lg:w-4/5 lg:items-start
          `}
        >
          <div className="hidden flex-grow sm:flex">
            <ul className="mr-auto flex gap-4">
              {secondaryLinks.map(([name, route], i) => (
                <NavItem key={`secondary-nav-item-${i}`} href={route}>
                  {name}
                </NavItem>
              ))}
            </ul>
          </div>
          <div
            className={`${styles.brand} flex flex-grow whitespace-nowrap text-3xl font-bold uppercase transition-all duration-700 sm:justify-center lg:text-5xl`}
          >
            <span className="text-blue-500">Salvador</span>
            <span className="text-yellow-700">Indian</span>
          </div>
          <div className="flex flex-grow">
            <ul className="ml-auto flex gap-4">
              <li className="cursor-pointer">
                <Icon icon="ic:outline-light-mode" width={25} height={25} />
              </li>
              <li className="cursor-pointer sm:hidden">
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
        className={`static top-0 sm:sticky ${
          navbarOpen || `hidden`
        } flex-col items-center border-b border-yellow-700 bg-white px-4 py-4 shadow-md sm:flex`}
      >
        <nav className="sticky top-0 flex flex-col items-center justify-start gap-6 lg:w-4/5">
          <ul className="flex gap-4 sm:hidden">
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
