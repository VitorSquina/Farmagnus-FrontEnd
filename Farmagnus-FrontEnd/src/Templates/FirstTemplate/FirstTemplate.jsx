import { NavBar } from "../../components/NavBar/NavBar";
import { Header } from "../../components/Header/Header";
import styles from "./FirstTemplate.module.css";
export const FirstTemplate = ({ logo, children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header logo={logo} />
      </header>
      <div className={styles.content}>
        <NavBar />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};
