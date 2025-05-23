import styles from './Catalogo.module.css';
import { FirstTemplate } from '../../Templates/FirstTemplate/FirstTemplate';
import { Header } from './components/Header/Header';
import { Filter } from './components/Filter/Filter';
import { TabelaCatalogo } from './components/TabelaCatalogo/TabelaCatalogo';

export const Catalogo = () => {
  return (
    <FirstTemplate>
      <div className={styles.container}>
        <div className={styles.buttonImportContainer}>
          <div className={styles.buttonImport}>
            <button className="secondaryButton">
              <p>Importar Medicamentos(TXT)</p>
            </button>
          </div>
        </div>
        <Header />
        <Filter />
        <TabelaCatalogo />
      </div>
    </FirstTemplate>
  );
};
