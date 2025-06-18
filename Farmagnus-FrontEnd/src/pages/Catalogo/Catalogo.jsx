import styles from './Catalogo.module.css';
import { FirstTemplate } from '../../Templates/FirstTemplate/FirstTemplate';
import { Header } from './components/Header/Header';
import { Filter } from './components/Filter/Filter';
import { TabelaCatalogo } from './components/TabelaCatalogo/TabelaCatalogo';
import { useState, useEffect } from 'react';
import { useMedicinesContext } from '../../contexts/medicines/MedicinesContext';
export const Catalogo = () => {
  const [visibleLevelFilter, setVisibleLevelFilter] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [visibleClass, setVisibleClass] = useState('todos');
  const [catalogo, setCatalogo] = useState([]);

  const { medicines, searchMedicines } = useMedicinesContext();

  useEffect(() => {
    if (searchValue) {
      setCatalogo(searchMedicines(searchValue));
    } else {
      setCatalogo(medicines);
    }
  }, [searchValue, medicines, visibleLevelFilter]);
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
        <Filter
          visibleLevelFilter={visibleLevelFilter}
          visibleClass={visibleClass}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          setVisibleClass={setVisibleClass}
          setVisibleLevelFilter={setVisibleLevelFilter}
        />
        <TabelaCatalogo medicines={catalogo} />
      </div>
    </FirstTemplate>
  );
};
