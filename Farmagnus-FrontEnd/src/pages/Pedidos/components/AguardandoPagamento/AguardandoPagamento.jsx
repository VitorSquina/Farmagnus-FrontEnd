import { CardPedido } from "../../../../components/CardPedido/CardPedido";
import styles from "./AguardandoPagamento.module.css";
const data = [
  {
    NumPedido: 1003,
    cliente: "Carlos Pereira",
    endereco: "Rua dos Pinheiros",
    Nendereco: 789,
    WhatsApp: 11965432109,
    Produtos: 2,
  },
  {
    NumPedido: 1003,
    cliente: "Carlos Pereira",
    endereco: "Rua dos Pinheiros",
    Nendereco: 789,
    WhatsApp: 11965432109,
    Produtos: 2,
  },
  {
    NumPedido: 1003,
    cliente: "Carlos Pereira",
    endereco: "Rua dos Pinheiros",
    Nendereco: 789,
    WhatsApp: 11965432109,
    Produtos: 2,
  },
];

export const AguardandoPagamento = () => {
  return (
    <>
      {data.map((i) => (
        <CardPedido>
          <div>
            <div className={styles.orderTitle}>{`
            Pedido #${i.NumPedido}
          `}</div>
            <div className={styles.orderDescription}>
              {`
                Cliente: ${i.cliente}\n
                Endereço: ${i.endereco}, ${i.Nendereco}\n
                Whatsapp: ${i.WhatsApp}n
                Produtos: ${i.Produtos} item(ns)
              `}
            </div>
            <div className={styles.orderButtons}></div>
          </div>
        </CardPedido>
      ))}
    </>
  );
};
