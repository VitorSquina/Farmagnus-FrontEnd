import { NavLink } from "react-router-dom";
import { Card } from "../../../../components/Card/Card";
import styles from "./AguardandoPagamento.module.css";
import { ButtonModal } from "../../../../components/ButtonModal/ButtonModal";

export const AguardandoPagamento = ({ data }) => {
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
              />
            </div>
            <div className={styles.confirmPaymentButtonContainer}>
              <button className="primaryButton">Confirmar pagamento</button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
