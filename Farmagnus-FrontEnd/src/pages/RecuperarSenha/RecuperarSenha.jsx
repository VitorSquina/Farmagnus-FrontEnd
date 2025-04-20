import { NavLink } from "react-router-dom";
import { PopOver } from "../../components/PopOver/PopOver";
import styles from "./RecuperarSenha.module.css";

export const RecuperarSenha = () => {
  return (
    <div className={styles.container}>
      <PopOver
        title={"Recuperação de Senha"}
        text={"Informe seu email para receber um código de recuperação"}
      >
        <form className={styles.form}></form>
        <div className={styles.footer}>
          <p className="text">
            Lembrou sua senha?
            <NavLink to={"/login"} className="link">
              Voltar para o login
            </NavLink>
          </p>
        </div>
      </PopOver>
    </div>
  );
};
