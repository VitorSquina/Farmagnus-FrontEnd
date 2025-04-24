import { NavLink } from "react-router-dom";
import { PopOver } from "../../components/PopOver/PopOver";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <PopOver
        title="Farmagnus Manager"
        text="Sistema de gerenciamento de pedidos para farmácias e drogarias"
      >
        <div className={styles.content}>
          <NavLink to="/login" className={styles.button}>
            acessar
          </NavLink>
          <NavLink to="/registrar" className={styles.button}>
            cadastrar-se
          </NavLink>
        </div>
      </PopOver>
    </div>
  );
};
