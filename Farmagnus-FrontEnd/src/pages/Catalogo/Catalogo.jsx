import styles from "./Catalogo.module.css";
import { FirstTemplate } from "../../Templates/FirstTemplate/FirstTemplate";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";

export const Catalogo = () => {
  return (
    <FirstTemplate>
      <div className={styles.container}>
        <Header />
        <Filter />
      </div>
    </FirstTemplate>
  );
};
