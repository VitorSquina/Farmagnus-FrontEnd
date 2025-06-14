import { RelDiario } from './components/RelDiario/RelDiario';
import { RelMensal } from './components/RelMensal/RelMensal';
import { RelSemanal } from './components/RelSemanal/RelSemanal';
import styles from './Header.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.content}>
        <Tabs className={styles.tabs}>
          <TabList className={styles.tabList}>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Diário
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Semanal
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Mensal
            </Tab>
          </TabList>
          <div className={styles.tabPanelContainer}>
            <TabPanel className={styles.tabPanel}>
              <RelDiario />
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
              <RelSemanal />
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
              <RelMensal />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
