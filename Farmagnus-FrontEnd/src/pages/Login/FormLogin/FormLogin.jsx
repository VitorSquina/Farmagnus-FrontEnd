// React
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
// Styles
import styles from './FormLogin.module.css';
// Components
import { Input } from '../../../components/Inputs/Input/Input';
import { CnpjInput } from '../../../components/Inputs/CnpjInput/CnpjInput';
// Context
import { useAuth } from '../../../contexts/Auth/useAuth';

export const FormLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const initialValues = {
    cnpj: '',
    password: '',
  };
  const validationSchema = Yup.object({
    cnpj: Yup.string()
      .required('CNPJ é obrigatório')
      .min(18, 'CNPJ deve ter 18 dígitos')
      .max(18, 'CNPJ deve ter 18 dígitos')
      .matches(
        /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
        'CNPJ deve estar no formato 00.000.000/0000-00'
      ),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    try {
      login(values);
    } catch (error) {
      console.log(error.message);
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
        {({ values }) => (
          <Form className={styles.form}>
            <CnpjInput
              name="cnpj"
              mask="99.999.999/9999-99"
              placeholder="00.000.000/0000-00"
              label="CNPJ"
            />

            <Input
              name="password"
              type={'password'}
              placeholder="∗∗∗∗∗∗∗∗∗∗"
              disabled={!values.cnpj}
            />
            <div className={styles.buttonContainer}>
              <button
                type="submit"
                onSubmit={handleSubmit}
                disabled={!values.cnpj || !values.password}
                className="primaryButton"
              >
                Entrar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
