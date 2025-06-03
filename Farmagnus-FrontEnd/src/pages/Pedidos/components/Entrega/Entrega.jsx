import { Card } from '../Card/Card';
import styles from './Entrega.module.css';
import { ButtonModal } from '../../../../components/ButtonModal/ButtonModal';

export const Entrega = ({ data }) => {
  return (
    <>
      {data.map((i) => (
        <Card key={i.numPedido} data={i}>
          <div className={styles.orderButtons}>
            <div>
              <ButtonModal name={'Ver Detalhes'} data={i} />
            </div>
            <div className={styles.confirmPaymentButtonContainer}>
              <button className="primaryButton">ConfirmarPagamento</button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
