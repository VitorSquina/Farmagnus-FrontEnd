import { Card } from '../../../../../../components/Card/Card';
import styles from './RelSemanal.module.css';
// React Icons
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegClock } from 'react-icons/fa';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const RelSemanal = () => {
  return (
    <div className={styles.container}>
      <Card>
        <div>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Pedidos Pendentes</h2>
            <BsBoxSeam color="gray" size={20} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardNumber}>47</h3>
            <p className={styles.cardText}>+12 em relação à semana anterior</p>
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
            <h3 className={styles.cardNumber}>32</h3>
            <p className={styles.cardText}>-5 em relação à semana anterior</p>
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
            <h3 className={styles.cardNumber}>18</h3>
            <p className={styles.cardText}>+3 em relação à semana anterior</p>
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
            <h3 className={styles.cardNumber}>86</h3>
            <p className={styles.cardText}>+15 em relação à semana anterior</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
