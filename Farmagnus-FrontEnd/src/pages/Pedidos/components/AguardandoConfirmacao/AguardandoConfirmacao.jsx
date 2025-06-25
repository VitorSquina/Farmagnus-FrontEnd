import { Card } from '../Card/Card';
import styles from './AguardandoConfirmacao.module.css';
import { ButtonModal } from '../../../../components/ButtonModal/ButtonModal';

export const AguardandoConfirmacao = ({ data }) => {
  return (
    <>
      {data.map((i) => (
        <Card key={i.numPedido} data={i}>
          <div className={styles.orderButtons}>
            <div>
              <ButtonModal className="secondaryButton" name={'Ver Detalhes'} data={i} />
            </div>
            <div className={styles.confirmPaymentButtonContainer}>
              <button className="primaryButton">Confirmar Pedido</button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
