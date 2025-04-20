import { NavLink } from "react-router-dom";
import styles from "./RecuperarSenha.module.css";

export const RecuperarSenha = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className="tittle">Recuperação de senha</h1>
          <p className="text">
            Informe seu email para receber um código de recuperação
          </p>
        </div>
        <form className={styles.form}></form>
        <div className={styles.footer}>
          <p className="text">
            Lembrou sua senha?
            <NavLink to={"/login"} className="link">
              Voltar para o login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
