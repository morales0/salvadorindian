import Footer from "./footer";
import styles from "./layout.module.scss";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className="flex-grow">
        Main
      </main>
      <Footer />
    </div>
  );
}
