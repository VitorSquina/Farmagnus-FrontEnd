import styles from './Card.module.css';
import { SendWhatsAppMessage } from '../../../../components/SendWhatsappMessage/SendWhatsAppMessage';
export const Card = ({ data, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.orderTitle}>{`
            Pedido #${data.numPedido}
          `}</div>
      <div className={styles.orderDescription}>
        <p className={styles.textOrderDescription}>{`Cliente: ${data.nomeCliente}`}</p>
        <p
          className={styles.textOrderDescription}
        >{`Endereço: ${data.enderecoCliente}, ${data.numEndereco}`}</p>

        <SendWhatsAppMessage data={data} className={styles.textOrderDescription} />

        <p className={styles.textOrderDescription}>{`Produtos: ${
          data.qntdProdutos
        } ${data.qntdProdutos > 1 ? 'itens' : 'item'}`}</p>
      </div>
      {children}
    </div>
  );
};
