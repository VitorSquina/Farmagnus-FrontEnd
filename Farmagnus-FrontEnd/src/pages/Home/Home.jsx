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
          <div className={styles.button}>
            <NavLink to="/login" className="primaryButton">
              acessar
            </NavLink>
          </div>
          <div className={styles.button}>
            <NavLink to="/registrar" className="secondaryButton">
              cadastrar-se
            </NavLink>
          </div>
        </div>
      </PopOver>
    </div>
  );
};
