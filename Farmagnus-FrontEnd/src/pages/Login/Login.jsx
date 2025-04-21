// React Router
import { NavLink } from "react-router-dom";
// React
import { useState } from "react";
// Components
import { PopOver } from "../../components/PopOver/PopOver";
import { MyForm } from "./MyForm/MyForm";
// CSS
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <PopOver
        title={"Acesso ao Sistema"}
        text={"Entre com seu CNPJ e senha para acessar o sistema"}
      >
        <MyForm />
        <div className={styles.footer}>
          <NavLink to={"/recuperar-senha"} className="link">
            Esqueceu sua senha?
          </NavLink>
          <p className="text">
            Não tem uma conta?
            <NavLink to={"/registrar"} className="link">
              Cadastre-se
            </NavLink>
          </p>
        </div>
      </PopOver>
    </div>
  );
};
