import styles from './Filter.module.css';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
export const Filter = () => {
  const [visibleLevelFilter, setVisibleLevelFilter] = useState(0);
  const [searchValue, setSearchValue] = useState();
  const [visibleClass, setVisibleClass] = useState('todos');

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <CiSearch size={15} color="#535353" />
        <input
          id="search"
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Busca por nome ou código de barras..."
          className={styles.search}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setVisibleLevelFilter('todos');
            setVisibleClass('todos');
          }}
          className={visibleClass == 'todos' ? 'primaryButton' : 'secondaryButton'}
        >
          <label>Todos</label>
        </button>
        <div className={styles.catalogoButtonContainer}>
          <button
            onClick={() => {
              setVisibleLevelFilter('visivel');
              setVisibleClass('visivel');
              console.log(visibleLevelFilter);
            }}
            className={visibleClass == 'visivel' ? 'primaryButton' : 'secondaryButton'}
          >
            <label>No Catálogo</label>
          </button>
          <button
            onClick={() => {
              setVisibleLevelFilter('oculto');
              setVisibleClass('oculto');
            }}
            className={visibleClass == 'oculto' ? 'primaryButton' : 'secondaryButton'}
          >
            <label>Fora do Catálogo</label>
          </button>
        </div>
      </div>
    </div>
  );
};
