import { Card } from '../../../../../../components/Card/Card';
import styles from './RelDiario.module.css';
// React Icons
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegClock } from 'react-icons/fa';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const RelDiario = () => {
  return (
    <div className={styles.container}>
      <Card>
        <div>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Pedidos Pendentes</h2>
            <BsBoxSeam color="gray" size={20} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardNumber}>13</h3>
            <p className={styles.cardText}>+2 nas últimas 24h</p>
          </div>
        </div>
      </Card>
      <Card>
        <div>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Aguardando Pagamento</h2>
            <FaRegClock color="gray" size={20} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardNumber}>8</h3>
            <p className={styles.cardText}>-2 nas últimas 24h</p>
          </div>
        </div>
      </Card>
      <Card>
        <div>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Não Faturados</h2>
            <IoAlertCircleOutline color="gray" size={20} className={styles.cardTitleIcon} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardNumber}>5</h3>
            <p className={styles.cardText}>+1 nas últimas 24h</p>
          </div>
        </div>
      </Card>
      <Card>
        <div>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Pedidos Pendentes</h2>
            <IoMdCheckmarkCircleOutline color="gray" size={20} className={styles.cardTitleIcon} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardNumber}>13</h3>
            <p className={styles.cardText}>+2 nas últimas 24h</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
