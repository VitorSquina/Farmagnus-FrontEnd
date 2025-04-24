// React
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
// Styles
import styles from "./MyForm.module.css";
// Components
import { Input } from "../../../components/Inputs/Input/Input";
import { Danger } from "../../../components/Alert/Danger/Danger";
// Context
import { useAuth } from "../../../contexts/AuthProvider";

export const MyForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const initialValues = {
    cnpj: "",
    senha: "",
  };
  const validationSchema = Yup.object({
    cnpj: Yup.string()
      .required("CNPJ é obrigatório")
      .min(18, "CNPJ deve ter 18 dígitos")
      .max(18, "CNPJ deve ter 18 dígitos")
      .matches(
        /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
        "CNPJ deve estar no formato 00.000.000/0000-00"
      ),
    senha: Yup.string()
      .required("Senha é obrigatória")
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .max(20, "Senha deve ter no máximo 20 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Senha deve conter pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial;"
      ),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    try {
      login(values);
    } catch (error) {
      <Danger>{error.message}</Danger>;
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <Form className={styles.form}>
            <Input name="cnpj" placeholder="00.000.000/0000-00" />
            <Input name="senha" type={"password"} placeholder="∗∗∗∗∗∗∗∗∗∗" />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
