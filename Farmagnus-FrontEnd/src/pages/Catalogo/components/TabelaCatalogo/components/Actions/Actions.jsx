import styles from './Actions.module.css';
import { FaRegEye, FaRegEyeSlash, FaRegEdit } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import { FiTrash } from 'react-icons/fi';
import { useMedicines } from '../../../../../../Hooks/useMedicines/useMedicines';
import { MedicineModal } from '../../../Header/components/MedicineModal/MedicineModal';
import { ButtonModal } from '../../../../../../components/ButtonModal/ButtonModal';

const iconSize = 17;
export const Actions = ({ visibility, id, values }) => {
  const { deleteMedicine, changeVisibility } = useMedicines();
  const handleChangeVisibility = () => {
    location.reload();
    changeVisibility(id, !visibility);
  };
  const handleDelete = (id) => () => {
    deleteMedicine(id);
    location.reload();
  };
  return (
    <div className={styles.actionsContainer}>
      <button onClick={handleChangeVisibility} className={styles.actionButton}>
        {values.catalogo ? <FaRegEyeSlash size={iconSize} /> : <FaRegEye size={iconSize} />}
      </button>
      <button className={styles.actionButton}>
        <LuSearch size={iconSize} />
      </button>

      <ButtonModal
        className={styles.actionButton}
        name={
          <>
            <FaRegEdit size={iconSize} />
          </>
        }
      >
        <MedicineModal
          title={'Editar Medicamento'}
          description={'Altere as informações do medicamento.'}
          buttonName={'Salvar Alterações'}
          id={id}
          type={'edit'}
          values={values}
        />
      </ButtonModal>
      <button className={styles.actionButton} onClick={handleDelete(id)}>
        <FiTrash size={iconSize} />
      </button>
    </div>
  );
};
