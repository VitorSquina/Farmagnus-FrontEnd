import styles from './Header.module.css';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <h1 className={styles.title}>Histórico de Compras</h1>
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
    </div>
  );
};
