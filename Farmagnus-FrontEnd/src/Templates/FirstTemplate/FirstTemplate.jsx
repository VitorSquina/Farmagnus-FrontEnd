import { NavBar } from "../../components/NavBar/NavBar";
import { Header } from "../../components/Header/Header";
import styles from "./FirstTemplate.module.css";
export const FirstTemplate = ({ logo, children }) => {
  return (
    <div className={styles.container}>
      <Header logo={logo} />
      <div className={styles.content}>
        <NavBar />
        {children}
      </div>
    </div>
  );
};
