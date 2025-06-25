import { FirstTemplate } from '../../Templates/FirstTemplate/FirstTemplate';
import { AguardandoConfirmacao } from './components/AguardandoConfirmacao/AguardandoConfirmacao';
import { AguardandoFinalizacao } from './components/AguardandoFinalizacao/AguardandoFinalizacao';
import { AguardandoPagamento } from './components/AguardandoPagamento/AguardandoPagamento';
import styles from './Pedidos.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const data = [
  {
    numPedido: 1003,
    nomeCliente: 'Carlos Pereira',
    enderecoCliente: 'Rua dos Pinheiros',
    numEndereco: 789,
    numWhatsapp: '+55499234531',
    qntdProdutos: 2,
  },
  {
    numPedido: 1004,
    nomeCliente: 'Carlos Pereira',
    enderecoCliente: 'Rua dos Pinheiros',
    numEndereco: 789,
    numWhatsapp: '+5549999936862',
    qntdProdutos: 1,
  },
  {
    numPedido: 1005,
    nomeCliente: 'Carlos Pereira',
    enderecoCliente: 'Rua dos Pinheiros',
    numEndereco: 789,
    numWhatsapp: '+5549988412772',
    qntdProdutos: 2,
  },
];

export const Pedidos = () => {
  return (
    <>
      <FirstTemplate logo={false}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h1 className="page-tittle">Pedidos</h1>
          </header>
          <Tabs className={styles.tabs}>
            <TabList className={styles.tabList}>
              <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
                Aguardando Confirmação
              </Tab>
              <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
                Aguardando Pagamento
              </Tab>
              <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
                Aguardando Finalização
              </Tab>
            </TabList>
            <div className={styles.tabPanelContainer}>
              <TabPanel className={styles.tabPanel}>
                <AguardandoConfirmacao data={data} />
              </TabPanel>
              <TabPanel className={styles.tabPanel}>
                <AguardandoPagamento data={data} />
              </TabPanel>
              <TabPanel className={styles.tabPanel}>
                <AguardandoFinalizacao data={data} />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </FirstTemplate>
    </>
  );
};
