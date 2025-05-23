import styles from './Header.module.css';
import { FaPlus } from 'react-icons/fa6';

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.title}>Catálogo de Medicamentos</h1>
        <div className={styles.primaryButtonContainer}>
          <button className="primaryButton">
            <FaPlus />
            <p>Adicionar Medicamento</p>
          </button>
        </div>
      </div>
    </header>
  );
};
