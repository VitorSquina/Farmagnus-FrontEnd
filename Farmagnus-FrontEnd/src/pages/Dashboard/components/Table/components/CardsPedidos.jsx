import { Card } from '../../../../../components/Card/Card';
import styles from './CardsPedidos.module.css';

export const CardsPedidos = ({ pedidoData }) => {
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <h2 className={styles.titleHeader}>Pedido #{pedidoData.numPedido}</h2>
            <p className="text">{pedidoData.dataPedido}</p>
          </div>
          <p className={styles.textCard}>Cliente: {pedidoData.nomeCliente}</p>
          <p className={styles.textCard}>Produtos: {pedidoData.qntdProdutos}</p>
          <p className={styles.textCard}>
            Status: <label className={styles.statusColor}>{pedidoData.status}</label>
          </p>
        </div>
      </Card>
    </div>
  );
};
