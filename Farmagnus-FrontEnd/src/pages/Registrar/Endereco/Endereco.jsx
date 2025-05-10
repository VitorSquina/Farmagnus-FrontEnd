import React from "react";
import { MyForm } from "./MyForm/MyForm";
import { PopOver } from "../../../components/PopOver/PopOver";
import styles from "./Endereco.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Endereco = () => {
  const location = useLocation();
  const dadosEmpresariais = location.state;

  return (
    <div className={styles.container}>
      <PopOver
        title="Cadastro de Endereço"
        text="Preencha os dados abaixo para cadastrar o endereço da sua farmácia"
      >
        <MyForm dadosEmpresa={dadosEmpresariais} />
        <p className="text">
          Já tem uma conta?{" "}
          <NavLink to="/login" className="link">
            Faça login
          </NavLink>
        </p>
      </PopOver>
    </div>
  );
};
