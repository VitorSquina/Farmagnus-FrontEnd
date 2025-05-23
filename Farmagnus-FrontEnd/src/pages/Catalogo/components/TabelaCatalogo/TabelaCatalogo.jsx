import styles from './TabelaCatalogo.module.css';
import { Actions } from './components/Actions/Actions';
import { LuImage } from 'react-icons/lu';
import { VisibleLabel } from './components/VisibleLabel/VisibleLabel';
const data = [
  {
    id: 1,
    image: '',
    name: 'Dipirona 500mg',
    lab: 'Medley',
    gtin: '7891234567890',
    value: 5.99,
    visible: true,
  },
  {
    id: 2,
    image: '',
    name: 'João',
    gtin: '7899876543210',
    lab: 'EMS',
    value: 3.24,
    visible: false,
  },
  {
    id: 3,
    image: '',
    name: 'João',
    gtin: '7897654321098',
    lab: 'Neo Química',
    value: 3.24,
    visible: true,
  },
  {
    id: 4,
    image: '',
    name: 'João',
    gtin: '7893216549870',
    lab: 'Eurofarma',
    value: 3.24,
    visible: true,
  },
];

export const TabelaCatalogo = () => {
  const handleChangeVisibility = (visibilidade) => {
    visibilidade = !visibilidade;
  };

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
          {data.map((item) => (
            <tr className={styles.tableRow} key={item.id} item={item}>
              <td className={styles.rowItems}>
                {item.image ? (
                  <img src={item.image} alt="Imagem do produto" className={styles.image} />
                ) : (
                  <LuImage className={styles.image} />
                )}
              </td>
              <td className={styles.rowItems}>{item.name}</td>
              <td className={styles.rowItems}>{item.lab}</td>
              <td className={styles.rowItems}>{item.gtin}</td>
              <td className={styles.rowItems}>{item.value}</td>
              <td className={styles.rowItems}>
                <VisibleLabel isVisible={item.visible} />
              </td>
              <td className={styles.rowItems}>
                <Actions visibility={item.visible} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
