import styles from './Actions.module.css';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { FiTrash } from 'react-icons/fi';

import { useMedicinesContext } from '../../../../../../contexts/medicines/MedicinesContext';

import { FormEditMedicine } from './components/FormEditMedicine/FormEditMedicine';
import { ShowDescription } from './components/ShowDescription/ShowDescription';

const iconSize = 17;
export const Actions = ({ visibility, id, values, data }) => {
  const { deleteMedicine, changeVisibility } = useMedicinesContext();

  const handleChangeVisibility = () => {
    changeVisibility(id, !visibility);
  };
  const handleDelete = (id) => () => {
    deleteMedicine(id);
  };

  return (
    <div className={styles.actionsContainer}>
      <button onClick={handleChangeVisibility} className={styles.actionButton}>
        {visibility ? <FaRegEyeSlash size={iconSize} /> : <FaRegEye size={iconSize} />}
      </button>
      <ShowDescription data={data} />
      <FormEditMedicine id={id} data={data} />
      <button className={styles.actionButton} onClick={handleDelete(id)}>
        <FiTrash size={iconSize} />
      </button>
    </div>
  );
};
