import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./header.module.scss";
import { NavItem } from "./nav-item";
import clsx from "clsx";
import salvadorindianBrand from "@assets/salvadorindian-brand-logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

// Data
const mainLinks = [
  ["Blog", "/blog"],
  ["Recipes", "/recipes"],
  ["Inspo", "/inspo"],
  ["Favorites", "/favorites"],
];
const secondaryLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
];

const Brand = () => (
  <div className="flex flex-row">
    <div className={clsx(styles.brand)}>Salvador</div>
    <div>Indian</div>
  </div>
);

// Component
export const Header = () => {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div className="px-4 py-2 bg-slate-200">
        <div className="flex flex-row">
          <nav className="flex flex-row gap-4">
            <Link href="/">home</Link>
            <div>about</div>
            <div>contact</div>
          </nav>
        </div>
      </div>
      <div className="flex flex-row items-center py-6">
        <Image src={salvadorindianBrand} alt="Brand" height={140} />
        <div className="flex flex-col items-start gap-3 text-2xl">
          <Link
            className={clsx(styles.navLink, {
              [styles.navLinkActive]: router.pathname === "/recipes",
            })}
            href="/recipes"
          >
            original recipes
          </Link>
          <Link
            className={clsx(styles.navLink, {
              [styles.navLinkActive]: router.pathname === "/blog",
            })}
            href="/blog"
          >
            blog
          </Link>
          <Link
            className={clsx(styles.navLink, {
              [styles.navLinkActive]: router.pathname === "/inspo",
            })}
            href="/inspo"
          >
            inspiration
          </Link>
        </div>
      </div>
    </div>
  );
  /* return (
    <>
      <header
        className={clsx(
          "sticky top-0 flex flex-col items-center px-4 py-5 bg-opacity-90 bg-white shadow-sm border-b border-zinc-300",
          "sm:static sm:pb-0 sm:border-0"
        )}
      >
        <nav
          className={clsx(
            "flex w-full items-center justify-between",
            "sm:grid sm:grid-cols-3 lg:w-4/5 lg:items-start"
          )}
        >
          <ul className="hidden sm:flex mr-auto gap-4 flex-grow ">
            {secondaryLinks.map(([name, route], i) => (
              <NavItem key={name} href={route}>
                {name}
              </NavItem>
            ))}
          </ul>

          <div
            className={`${styles.brand} flex flex-grow whitespace-nowrap text-3xl font-bold uppercase transition-all duration-700 sm:justify-center lg:text-4xl`}
          >
            <span className="text-blue-400 font-bold">Salvador</span>
            <span className="text-amber-400 font-bold">Indian</span>
          </div>
          <ul className="ml-auto flex flex-grow gap-4">
            <li className="ml-auto cursor-pointer">
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
          </ul>
        </nav>
        <nav
          className={clsx(
            !navbarOpen && "hidden",
            "flex flex-col items-center justify-start gap-2 lg:w-4/5",
            "sm:hidden"
          )}
        >
          <ul className="flex gap-4 sm:hidden">
            {secondaryLinks.map(([name, route], i) => (
              <NavItem key={`secondary-nav-item-${i}`} href={route}>
                {name}
              </NavItem>
            ))}
          </ul>

          <ul className="flex gap-3 flex-wrap">
            {mainLinks.map(([name, route], i) => (
              <NavItem key={`nav-item-${i}`} href={route} main>
                {name}
              </NavItem>
            ))}
          </ul>
        </nav>
      </header>
      <header
        className={clsx(
          "hidden flex-col items-center border-b border-neutral-400 bg-white px-4 pb-4 pt-2 shadow-sm",
          "sm:sticky sm:top-0 sm:flex",
          navbarOpen && "hidden"
        )}
      >
        <nav className=" flex flex-col items-center justify-start gap-2 lg:w-4/5">
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
  ); */
};

export default Header;
