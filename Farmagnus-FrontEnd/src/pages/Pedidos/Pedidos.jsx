import { FirstTemplate } from "../../Templates/FirstTemplate/FirstTemplate";
import styles from "./Pedidos.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
              <Tab className={styles.tabItem}>Aguardando Pagamento</Tab>
              <Tab className={styles.tabItem}>Não Faturado</Tab>
              <Tab className={styles.tabItem}>Retirada na Loja</Tab>
              <Tab className={styles.tabItem}>Entrega</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </FirstTemplate>
    </>
  );
};
