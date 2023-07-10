import Link from "next/link";

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
        py-1 px-4
        rounded-t-md hover:bg-orange-50 transition duration-200
        ${main || `text-sm`}
        ${main && `border-b border-yellow-700 text-base lg:text-lg`}
      `}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavItem;
