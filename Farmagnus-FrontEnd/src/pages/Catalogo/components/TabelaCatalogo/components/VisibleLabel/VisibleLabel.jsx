import styles from './VisibleLabel.module.css';
export const VisibleLabel = ({ isVisible, children }) => {
  return (
    <label>
      {isVisible ? (
        <span className={styles.green}>Visível</span>
      ) : (
        <span className={styles.red}>Oculto</span>
      )}
    </label>
  );
};
