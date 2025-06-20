// React
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
// Styles
import styles from './FormCadastroEndereco.module.css';
// Components
import { Input } from '../../../../components/Inputs/Input/Input';
import { CepInput } from '../../../../components/Inputs/CepInput/CepInput';

// Icons
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { useUsers } from '../../../../Hooks/useUser/useUser';

export const FormCadastroEndereco = ({ dadosEmpresa }) => {
  const { createUser } = useUsers();
  const navigate = useNavigate();
  const initialValues = {
    cep: '',
    estado: '',
    cidade: '',
    rua: '',
    numero: '',
    complemento: '',
  };
  const validationSchema = Yup.object({
    cep: Yup.string().required('Campo obrigatório'),

    estado: Yup.string().required('Campo obrigatório'),
    cidade: Yup.string().required('Campo obrigatório'),
    rua: Yup.string().required('Campo obrigatório'),
    numero: Yup.string().required('Campo obrigatório'),
    complemento: Yup.string(),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const dadosCompletos = { ...dadosEmpresa, ...values };

    try {
      createUser(dadosCompletos);
    } catch (error) {
      console.log('error: ' + error.message);
    } finally {
      navigate('/login');
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
            <CepInput name="cep" label="Cep" placeholder="Ex: 00000-000" required={true} />
            <div className={styles.grid}>
              <Input
                name="estado"
                type={'text'}
                label={'Estado'}
                required={true}
                placeholder="Ex: SP"
                disabled={isSubmitting}
              />
              <Input
                name="cidade"
                type={'text'}
                label={'Cidade'}
                required={true}
                placeholder="Ex: São Paulo"
                disabled={isSubmitting}
              />
            </div>
            <Input
              name="rua"
              type={'text'}
              label={'Rua'}
              required={true}
              placeholder="Ex: Rua das Flores"
              disabled={isSubmitting}
            />
            <div className={styles.grid}>
              <Input
                name="numero"
                type={'text'}
                label={'Número'}
                required={true}
                placeholder="Ex: 123"
                disabled={isSubmitting}
              />

              <Input
                name="complemento"
                type={'text'}
                label={'Complemento'}
                required={false}
                placeholder="Ex: Apto 123"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.bottomContainer}>
              <div className={styles.buttonContainer}>
                <NavLink to="/registrar" className="secondaryNavButton">
                  <p>Voltar</p>
                </NavLink>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !values.cep ||
                    !values.estado ||
                    !values.cidade ||
                    !values.rua ||
                    !values.numero
                  }
                  className="primaryButton"
                >
                  <p>Finalizar Cadastro</p>
                  <p>
                    <IoIosCheckmarkCircleOutline size={25} />
                  </p>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
