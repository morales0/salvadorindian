import { Footer } from "./footer";
import styles from "./layout.module.scss";
import { Header } from "./header";
import { PropsWithChildren } from "react";
import clsx from "clsx";

type LayoutProps = {
  home?: boolean;
  mainClasses?: string;
} & PropsWithChildren;

const Layout = ({ children, home, mainClasses }: LayoutProps) => {
  return (
    <div className="flex flex-col relative min-h-full">
      <Header />
      <main className={clsx(mainClasses)}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
