import Footer from "./footer";
import styles from "./layout.module.scss";
import Header from "./header";

type LayoutProps = {
  home?: boolean,
  mainClasses?: string,
  children?: React.ReactNode,
}

const Layout = ({ children, home, mainClasses }: LayoutProps) => {
  return (
    <div className={styles.app}>
      <Header />
      <main 
        className={`
          flex-grow
          ${mainClasses || ''}
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;