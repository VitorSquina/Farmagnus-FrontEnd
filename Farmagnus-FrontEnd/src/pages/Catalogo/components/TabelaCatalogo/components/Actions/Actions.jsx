import styles from './Actions.module.css';

import { FaRegEye, FaRegEyeSlash, FaRegEdit } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import { FiTrash } from 'react-icons/fi';

import { useMedicinesContext } from '../../../../../../contexts/medicines/MedicinesContext';

import { FormEditMedicine } from './components/FormEditMedicine/FormEditMedicine';

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
        {values.catalogo ? <FaRegEyeSlash size={iconSize} /> : <FaRegEye size={iconSize} />}
      </button>
      <button className={styles.actionButton}>
        <LuSearch size={iconSize} />
      </button>
      <FormEditMedicine id={id} data={data} />
      <button className={styles.actionButton} onClick={handleDelete(id)}>
        <FiTrash size={iconSize} />
      </button>
    </div>
  );
};
