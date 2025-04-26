import styles from "./Registrar.module.css";
import { PopOver } from "../../components/PopOver/PopOver";
import { MyForm } from "./MyForm/MyForm";
import { NavLink } from "react-router-dom";

export const Registrar = () => {
  return (
    <div className={styles.container}>
      <PopOver
        title="Cadastro de Farmácia"
        text="Preencha os dados abaixo para cadastrar sua farmácia"
      >
        <div className={styles.formContainer}>
          <MyForm />
          <p className="text">
            Já tem uma conta?{" "}
            <NavLink to="/login" className="link">
              Faça login
            </NavLink>
          </p>
        </div>
      </PopOver>
    </div>
  );
};
