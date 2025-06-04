import { ButtonModal } from '../../../../components/ButtonModal/ButtonModal';
import styles from './Header.module.css';
import { FaPlus } from 'react-icons/fa6';
import { MedicineModal } from './components/MedicineModal/MedicineModal';

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.title}>Catálogo de Medicamentos</h1>
        <div className={styles.primaryButtonContainer}>
          <ButtonModal
            className="primaryButton"
            name={
              <>
                <FaPlus />
                <p>Adicionar Medicamento</p>
              </>
            }
          >
            <MedicineModal
              title={'Adicionar Medicamento'}
              description={'Preencha as informações do novo medicamento.'}
              buttonName={'Adicionar Medicamento'}
            />
          </ButtonModal>
        </div>
      </div>
    </header>
  );
};
