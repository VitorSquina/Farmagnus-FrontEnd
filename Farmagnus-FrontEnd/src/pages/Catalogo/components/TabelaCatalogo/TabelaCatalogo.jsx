import styles from './TabelaCatalogo.module.css';
import { Actions } from './components/Actions/Actions';
import { LuImage } from 'react-icons/lu';
import { VisibleLabel } from './components/VisibleLabel/VisibleLabel';
import { useMedicines } from '../../../../Hooks/useMedicines/useMedicines';

export const TabelaCatalogo = () => {
  const { medicines } = useMedicines();

  console.log(medicines);

  if (!medicines || medicines.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyMessage}>Nenhum medicamento encontrado!</p>
      </div>
    );
  }
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableHeaderRow}>
            <th className={styles.listTitleContainer}>
              <label className={styles.listTitle}>Imagem</label>
            </th>
            <th className={styles.listTitleContainer}>
              <label className={styles.listTitle}>Nome</label>
            </th>
            <th className={styles.listTitleContainer}>
              <label className={styles.listTitle}>Laboratório</label>
            </th>
            <th className={styles.listTitleContainer}>
              <label className={styles.listTitle}>GTIN</label>
            </th>
            <th className={styles.listTitleContainer}>
              <label className={styles.listTitle}>Preço</label>
            </th>
            <th className={styles.listTitleContainer}>
              <label className={styles.listTitle}>Catálogo</label>
            </th>
            <th>
              <label className={styles.listTitleActions}>Ações</label>
            </th>
          </tr>
        </thead>

        <tbody>
          {medicines.map((item) => (
            <tr className={styles.tableRow} key={item.id} item={item}>
              <td className={styles.rowItems}>
                {item.image ? (
                  <img src={item.image} alt="Imagem do produto" className={styles.image} />
                ) : (
                  <LuImage className={styles.image} />
                )}
              </td>
              <td className={styles.rowItems}>{item.nome}</td>
              <td className={styles.rowItems}>{item.laboratorio}</td>
              <td className={styles.rowItems}>{item.codigo_de_barras}</td>
              <td className={styles.rowItems}>{item.preco}</td>
              <td className={styles.rowItems}>
                <VisibleLabel isVisible={item.exibit_catalogo} />
              </td>
              <td className={styles.rowItems}>
                <Actions visibility={item.exibit_catalogo} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
