// React Router
import { NavLink } from 'react-router-dom';
// Components
import { PopOver } from '../../components/PopOver/PopOver';
import { FormLogin } from './FormLogin/FormLogin';
// CSS
import styles from './Login.module.css';

export const Login = () => {
  return (
    <div className={styles.container}>
      <PopOver
        title={'Acesso ao Sistema'}
        text={'Entre com seu CNPJ e senha para acessar o sistema'}
      >
        <FormLogin />
        <div className={styles.footer}>
          <NavLink to={'/recuperar-senha'} className="link">
            Esqueceu sua senha?
          </NavLink>
          <p className="text">
            Não tem uma conta?
            <NavLink to={'/registrar'} className="link">
              Cadastre-se
            </NavLink>
          </p>
        </div>
      </PopOver>
    </div>
  );
};
