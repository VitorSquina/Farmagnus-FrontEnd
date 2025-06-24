import styles from './Header.module.css';
import { LuStore, LuFlagOff, LuSave } from 'react-icons/lu';
export const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Configuração de Horários</h2>
      </div>
      <div className={styles.buttonsContainer}>
        <button className="secondaryButton">
          <LuStore />
          Fechar Farmácia
        </button>
        <button className="secondaryButton">
          <LuFlagOff />
          Desativar Entregas
        </button>
        <button className="primaryButton">
          <LuSave />
          Salvar Configurações
        </button>
      </div>
    </div>
  );
};
