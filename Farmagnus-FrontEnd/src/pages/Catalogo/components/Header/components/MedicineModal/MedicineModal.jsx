import styles from './MedicineModal.module.css';
import { FormMedicine } from './FormMedicine/FormMedicine';

export const MedicineModal = ({ description, title, buttonName, id, type }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.description}>{description}</h3>
      </header>
      <FormMedicine buttonName={buttonName} id={id} type={type} />
    </div>
  );
};
