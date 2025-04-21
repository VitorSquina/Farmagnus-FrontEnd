import { Input } from "../../../components/Inputs/Input/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./MyForm.module.css";

export const MyForm = () => {
  const initialValues = {
    cnpj: "",
    senha: "",
  };
  const validationSchema = Yup.object({});
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

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
            <Input
              name="cnpj"
              required={true}
              placeholder="00.000.000/0000-00"
            />
            <Input
              name="senha"
              type={"password"}
              required={true}
              placeholder="∗∗∗∗∗∗∗∗∗∗"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
