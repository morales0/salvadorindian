import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./header.module.scss";
import { NavItem } from "./nav-item";
import clsx from "clsx";

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
export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 flex items-center px-4 pt-5 pb-2 bg-slate-200",
          "sm:static sm:pb-0 sm:border-0",
          navbarOpen && "border-b border-yellow-700"
        )}
      >
        <nav className="mb-2 flex w-full items-center justify-between sm:grid sm:grid-cols-3 lg:w-4/5 lg:items-start">
          <ul className="hidden sm:flex mr-auto gap-4 flex-grow ">
            {secondaryLinks.map(([name, route], i) => (
              <NavItem key={name} href={route}>
                {name}
              </NavItem>
            ))}
          </ul>

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
        className={clsx(
          "flex-col items-center border-b border-yellow-700 bg-white px-4 py-4 shadow-md sm:flex",
          navbarOpen && "hidden"
        )}
      >
        <nav className="sticky top-0 flex flex-col items-center justify-start gap-2 lg:w-4/5">
          <ul className="flex gap-4 sm:hidden">
            {secondaryLinks.map(([name, route], i) => (
              <NavItem key={`secondary-nav-item-${i}`} href={route}>
                {name}
              </NavItem>
            ))}
          </ul>

          <ul className="sticky top-0 flex gap-8  ">
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
