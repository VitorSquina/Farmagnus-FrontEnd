import { Card } from "../../../../components/Card/Card";
import styles from "./NaoFaturado.module.css";
import { ButtonModal } from "../../../../components/ButtonModal/ButtonModal";

export const NaoFaturado = ({ data }) => {
  const handleFaturar = () => {};

  return (
    <>
      {data.map((i) => (
        <Card key={i.numPedido} data={i}>
          <div className={styles.orderButtons}>
            <div>
              <ButtonModal
                className="secondaryButton"
                name={"Ver Detalhes"}
                data={i}
                description={true}
              />
            </div>
            <div className={styles.confirmPaymentButtonContainer}>
              <ButtonModal
                name="Faturar"
                className="primaryButton"
                onClick={handleFaturar}
                description={false}
              />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
