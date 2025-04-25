import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styles from "./MyForm.module.css";
import { Input } from "../../../components/Inputs/Input/Input";
import { TelefoneInput } from "../../../components/Inputs/TelefoneInput/TelefoneInput";
import { CnpjInput } from "../../../components/Inputs/CnpjInput/CnpjInput";

export const MyForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          nomeEmpresa: "",
          nomeResponsavel: "",
          cnpj: "",
          telefone: "",
          email: "",
          senha: "",
          confirmarSenha: "",
        }}
        validationSchema={Yup.object({
          cnpj: Yup.string()
            .required("CNPJ é obrigatório")
            .min(18, "CNPJ deve ter 18 dígitos")
            .max(18, "CNPJ deve ter 18 dígitos")
            .matches(
              /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
              "CNPJ deve estar no formato 00.000.000/0000-00"
            ),
          nomeEmpresa: Yup.string()
            .required("Nome da empresa é obrigatório")
            .min(5, "Nome da empresa deve ter pelo menos 3 caracteres")
            .max(16, "Nome da empresa deve ter no máximo 16 caracteres")
            .matches(
              /^[a-zA-Z0-9\s]+$/,
              "Nome da empresa deve conter apenas letras e números"
            ),
          nomeResponsavel: Yup.string()
            .required("Nome do responsável é obrigatório")
            .min(5, "Nome do responsável deve ter pelo menos 3 caracteres")
            .max(16, "Nome do responsável deve ter no máximo 16 caracteres"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form className={styles.form}>
            <div>
              <Input
                name="nomeEmpresa"
                type={"text"}
                label={"Nome da Empresa"}
                required={true}
                placeholder="Ex: Farmagnus Centro"
              />
              <Input
                name="nomeResponsavel"
                type={"text"}
                label={"Nome do Responsável"}
                required={true}
                placeholder="Ex: Jorge Vagner"
              />

              <CnpjInput
                name="cnpj"
                mask="99.999.999/9999-99"
                placeholder="00.000.000/0000-00"
                label="CNPJ"
                required={true}
              />
            </div>

            <div className={styles.grid}>
              <TelefoneInput
                name="telefone"
                required={true}
                placeholder={"(00) 0 0000-0000"}
              />
              <Input
                name="email"
                type={"email"}
                required={true}
                placeholder={"farmagnus@email.com"}
              />
              <Input
                name="senha"
                type={"password"}
                required={true}
                placeholder={"********"}
              />
              <Input
                name="confirmarSenha"
                type={"password"}
                required={true}
                placeholder={"********"}
                disabled={!values.senha}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Proximo
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
