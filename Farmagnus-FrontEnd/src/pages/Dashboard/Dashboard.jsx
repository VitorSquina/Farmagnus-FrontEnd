import { FirstTemplate } from '../../Templates/FirstTemplate/FirstTemplate';
import { Header } from './components/Header/Header';
import { Table } from './components/Table/Table';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  return (
    <FirstTemplate>
      <div className={styles.container}>
        <Header />
        <Table />
      </div>
    </FirstTemplate>
  );
};
