import Link from "next/link";
import { PropsWithChildren } from "react";

type NavItemProps = {
  href: string;
  main?: boolean;
} & PropsWithChildren;

export const NavItem = ({ href, main, children }: NavItemProps) => {
  return (
    <li
      className={`
        flex
        uppercase
        text-sm
        p-0
        rounded-t-md hover:bg-orange-50 transition duration-200
        ${main || `text-sm`}
        ${main && `border-b border-yellow-700 lg:text-base`}
      `}
    >
      <Link className="px-1 py-1 sm:px-2 sm:py-1" href={href}>
        {children}
      </Link>
    </li>
  );
};
