import styles from './StatusLabel.module.css';

export const StatusLabel = ({ status }) => {
  return (
    <label>
      {status === 'Concluído' ? (
        <span className={styles.concluido}>Concluído</span>
      ) : status === 'Cancelado' ? (
        <span className={styles.cancelado}>Cancelado</span>
      ) : status === 'Pendente' ? (
        <span className={styles.pendente}>Pendente</span>
      ) : (
        <span className={styles.default}>{status}</span>
      )}
    </label>
  );
};
