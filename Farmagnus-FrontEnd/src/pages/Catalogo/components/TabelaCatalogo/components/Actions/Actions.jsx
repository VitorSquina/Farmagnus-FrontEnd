import styles from './Actions.module.css';
import { FaRegEye, FaRegEyeSlash, FaRegEdit } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import { FiTrash } from 'react-icons/fi';
const iconSize = 17;
export const Actions = ({ visibility }) => {
  const handleChangeVisibility = () => {
    visibility = !visibility;
  };

  return (
    <div className={styles.actionsContainer}>
      <button onClick={handleChangeVisibility} className={styles.actionButton}>
        {visibility ? <FaRegEyeSlash size={iconSize} /> : <FaRegEye size={iconSize} />}
      </button>
      <button className={styles.actionButton}>
        <LuSearch size={iconSize} />
      </button>
      <button className={styles.actionButton}>
        <FaRegEdit size={iconSize} />
      </button>
      <button className={styles.actionButton}>
        <FiTrash size={iconSize} />
      </button>
    </div>
  );
};
