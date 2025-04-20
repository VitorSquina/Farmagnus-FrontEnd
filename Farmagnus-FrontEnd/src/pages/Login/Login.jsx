import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.header}>
          <h1 className="tittle">Acesso ao Sistema</h1>
          <p className="text">
            Entre com seu CNPJ e senha para acessar o sistema
          </p>
        </div>
        <form className={styles.form}></form>
        <div className={styles.footer}>
          <NavLink to={"/esqueceu-senha"} className="link">
            Esqueceu sua senha?
          </NavLink>
          <p className="text">
            Não tem uma conta?
            <NavLink to={"/registrar"} className="link">
              Cadastre-se
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
