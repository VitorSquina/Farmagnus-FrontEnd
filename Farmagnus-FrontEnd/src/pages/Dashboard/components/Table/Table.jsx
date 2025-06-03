import { CardsPedidos } from './components/CardsPedidos';
import styles from './Table.module.css';

export const Table = () => {
  const data = [
    {
      numPedido: 1003,
      nomeCliente: 'Carlos Pereira',
      enderecoCliente: 'Rua dos Pinheiros',
      numEndereco: 789,
      numWhatsapp: '+55499234531',
      qntdProdutos: 2,
      status: 'Aguardando Pagamento',
      dataPedido: '2023-10-01',
    },
    {
      numPedido: 1004,
      nomeCliente: 'Carlos Pereira',
      enderecoCliente: 'Rua dos Pinheiros',
      numEndereco: 789,
      numWhatsapp: '+5549999936862',
      qntdProdutos: 1,
      status: 'Aguardando Pagamento',
      dataPedido: '2023-10-01',
    },
    {
      numPedido: 1005,
      nomeCliente: 'Carlos Pereira',
      enderecoCliente: 'Rua dos Pinheiros',
      numEndereco: 789,
      numWhatsapp: '+5549988412772',
      qntdProdutos: 2,
      status: 'Aguardando Pagamento',
      dataPedido: '2023-10-01',
    },
    {
      numPedido: 1003,
      nomeCliente: 'Carlos Pereira',
      enderecoCliente: 'Rua dos Pinheiros',
      numEndereco: 789,
      numWhatsapp: '+55499234531',
      qntdProdutos: 2,
      status: 'Aguardando Pagamento',
      dataPedido: '2023-10-01',
    },
    {
      numPedido: 1003,
      nomeCliente: 'Carlos Pereira',
      enderecoCliente: 'Rua dos Pinheiros',
      numEndereco: 789,
      numWhatsapp: '+55499234531',
      qntdProdutos: 2,
      status: 'Aguardando Pagamento',
      dataPedido: '2023-10-01',
    },
    {
      numPedido: 1003,
      nomeCliente: 'Carlos Pereira',
      enderecoCliente: 'Rua dos Pinheiros',
      numEndereco: 789,
      numWhatsapp: '+55499234531',
      qntdProdutos: 2,
      status: 'Aguardando Pagamento',
      dataPedido: '2023-10-01',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pedidos Recentes</h2>

      <div className={styles.tableContainer}>
        <div className={styles.cardContainer}>
          {data.map((pedidoData) => (
            <CardsPedidos pedidoData={pedidoData} />
          ))}
        </div>
      </div>
    </div>
  );
};
