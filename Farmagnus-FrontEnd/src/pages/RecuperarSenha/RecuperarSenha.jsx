import { NavLink } from 'react-router-dom';
import { PopOver } from '../../components/PopOver/PopOver';
import styles from './RecuperarSenha.module.css';
import { Input } from '../../components/Inputs/Input/Input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const RecuperarSenha = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    const { email } = values;
    try {
      console.log(`Sending recovery email to ${email}`);
    } catch (error) {
      console.error('Error sending recovery email:', error);
    }
    setSubmitting(false);
  };
  return (
    <div className={styles.container}>
      <PopOver
        title={'Recuperação de Senha'}
        text={'Informe seu email para receber um código de recuperação'}
      >
        <Formik
          initialValues={{ email: '' }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            email: Yup.string().email('Email inválido').required('Email é obrigatório'),
          })}
        >
          {({ handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit} className={styles.form}>
              <Input
                name="email"
                type="email"
                placeholder="Digite seu email"
                label="Email"
                onChange={handleChange}
                value={values.email}
              />
              <div className={styles.buttonContainer}>
                <button
                  type="submit"
                  className="primaryButton"
                  disabled={!values.email}
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className={styles.footer}>
          <p className="text">
            Lembrou sua senha?
            <NavLink to={'/login'} className="link">
              Voltar para o login
            </NavLink>
          </p>
        </div>
      </PopOver>
    </div>
  );
};
