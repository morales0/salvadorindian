import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./header.module.scss";
import { NavItem } from "./nav-item";
import clsx from "clsx";
import salvadorindianLogo from "@assets/salvadorindian-logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

// Data
const mainLinks = [
  ["blog", "/blog"],
  ["original recipes", "/recipes"],
  ["inspiration", "/inspo"],
];
const secondaryLinks = [
  ["home", "/"],
  ["about", "/about"],
  ["contact", "/contact"],
];

// Component
export const Header = () => {
  const router = useRouter();

  return (
    <div>
      <div className="px-4 py-2 bg-slate-200">
        <div className="flex flex-row justify-center">
          <nav className="flex flex-row gap-4 text-slate-600">
            {secondaryLinks.map(([name, href]) => (
              <Link key={name} href={href}>
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <nav className="flex flex-col items-center py-3 px-6 gap-3 sm:flex-row sm:justify-center sm:gap-6 md:gap-8">
        <Link href="/" className="sm:py-4">
          <Image src={salvadorindianLogo} alt="Brand" height={125} />
        </Link>
        <div className="flex flex-row gap-4 sm:flex-col items-start  text-base sm:text-lg md:text-xl lg:text-2xl">
          {mainLinks.map(([name, href]) => (
            <Link
              key={name}
              className={clsx(styles.navLink, {
                [styles.navLinkActive]: router.pathname === href,
              })}
              href={href}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="container px-8 m-auto flex flex-row justify-center max-w-xl">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />

          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
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
