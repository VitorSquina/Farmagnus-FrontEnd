import { Card } from '../../../../../../components/Card/Card';
import styles from './RelMensal.module.css';
// React Icons
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegClock } from 'react-icons/fa';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const RelMensal = () => {
  return (
    <div className={styles.container}>
      <Card>
        <div>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Pedidos Pendentes</h2>
            <BsBoxSeam color="gray" size={20} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardNumber}>183</h3>
            <p className={styles.cardText}>+42 em relação ao mês anterior</p>
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
            <h3 className={styles.cardNumber}>124</h3>
            <p className={styles.cardText}>+18 em relação ao mês anterior</p>
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
            <h3 className={styles.cardNumber}>76</h3>
            <p className={styles.cardText}>+12 em relação ao mês anterior</p>
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
            <h3 className={styles.cardNumber}>342</h3>
            <p className={styles.cardText}>+65 em relação ao mês anterior</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
