import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styles from "./MyForm.module.css";
import { Input } from "../../../components/Inputs/Input/Input";
import { TelefoneInput } from "../../../components/Inputs/TelefoneInput/TelefoneInput";
import { CnpjInput } from "../../../components/Inputs/CnpjInput/CnpjInput";

export const MyForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    nome_empresa: "",
    nome_responsavel: "",
    cnpj: "",
    telefone: "",
    email: "",
    senha: "",
    confirmar_senha: "",
  };

  const validationSchema = Yup.object({
    nome_empresa: Yup.string()
      .required("Nome da empresa é obrigatório")
      .min(5, "Nome da empresa deve ter pelo menos 3 caracteres")
      .max(16, "Nome da empresa deve ter no máximo 16 caracteres")
      .matches(
        /^[a-zA-Z0-9\s]+$/,
        "Nome da empresa deve conter apenas letras e números"
      ),
    nome_responsavel: Yup.string()
      .required("Nome do responsável é obrigatório")
      .min(5, "Nome do responsável deve ter pelo menos 3 caracteres")
      .max(16, "Nome do responsável deve ter no máximo 16 caracteres"),

    cnpj: Yup.string()
      .required("CNPJ é obrigatório")
      .matches(
        /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
        "CNPJ deve estar no formato 00.000.000/0000-00"
      ),
    telefone: Yup.string()
      .required("Telefone é obrigatório")
      .matches(
        /^\(\d{2}\) \d{1} \d{4}-\d{4}$/,
        "Telefone deve estar no formato (00) 0 0000-0000"
      ),
    email: Yup.string()
      .required("Email é obrigatório")
      .email("Email inválido")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email deve estar no formato"
      ),
    senha: Yup.string()
      .required("Senha é obrigatória")
      .min(8, "Senha deve ter pelo menos 8 caracteres")
      .matches(/[a-z]/, "Senha deve conter letras minúsculas")
      .matches(/\d/, "Senha deve conter números")
      .matches(/[!@#$%^&*]/, "Senha deve conter caracteres especiais")
      .matches(/[A-Z]/, "Senha deve conter letras maiúsculas"),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    const dadosIniciais = {
      nome_empresa: values.nome_empresa,
      nome_responsavel: values.nome_responsavel,
      cnpj: values.cnpj,
      email: values.email,
      telefone: values.telefone,
      senha: values.senha,
    };
    try {
      navigate("/registrar/endereco", { state: dadosIniciais });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form className={styles.form}>
            <div>
              <Input
                name="nome_empresa"
                type={"text"}
                label={"Nome da Empresa"}
                required={true}
                placeholder="Ex: suaEmpresa Centro"
              />
              <Input
                name="nome_responsavel"
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
                placeholder={"seu@email.com"}
              />
              <Input
                name="senha"
                type={"password"}
                required={true}
                placeholder={"********"}
              />
              <Input
                name="confirmar_senha"
                type={"password"}
                required={true}
                placeholder={"********"}
                disabled={!values.senha}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !values.senha ||
                  !values.confirmar_senha ||
                  values.senha !== values.confirmar_senha
                }
                className="primaryButton"
              >
                Proximo
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
