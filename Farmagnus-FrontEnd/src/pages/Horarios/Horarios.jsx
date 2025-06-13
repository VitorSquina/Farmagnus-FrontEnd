import { FirstTemplate } from '../../Templates/FirstTemplate/FirstTemplate';
import { Header } from './components/Header/Header';
import { HorariosEntrega } from './components/HorariosEntregas/HorariosEntrega';
import { HorariosFarmacia } from './components/HorariosFarmacia/HorariosFarmacia';
import { HorariosFeriados } from './components/HorariosFeriados/HorariosFeriados';
import styles from './Horarios.module.css';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

export const Horarios = () => {
  return (
    <FirstTemplate>
      <div className={styles.container}>
        <Header />
        <Tabs className={styles.tabs}>
          <TabList className={styles.tabList}>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Horario da Farmácia
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Horario de Entregas
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Feriado
            </Tab>
          </TabList>
          <div className={styles.tabPanelContainer}>
            <TabPanel className={styles.tabPanel}>
              <HorariosFarmacia />
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
              <HorariosEntrega />
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
              <HorariosFeriados />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </FirstTemplate>
  );
};
