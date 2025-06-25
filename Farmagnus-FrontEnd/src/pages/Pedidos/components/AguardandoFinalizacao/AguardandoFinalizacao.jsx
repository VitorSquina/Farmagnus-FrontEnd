import { Card } from '../Card/Card';
import styles from './AguardandoFinalizacao.module.css';
import { ButtonModal } from '../../../../components/ButtonModal/ButtonModal';

export const AguardandoFinalizacao = ({ data }) => {
  return (
    <>
      {data.map((i) => (
        <Card key={i.numPedido} data={i}>
          <div className={styles.orderButtons}>
            <div>
              <ButtonModal name={'Ver Detalhes'} data={i} className="secondaryButton" />
            </div>
            <div className={styles.confirmPaymentButtonContainer}>
              <button className="primaryButton">Finalizar</button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
