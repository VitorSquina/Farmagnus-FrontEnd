import { Card, Modal } from '@mui/material';
import styles from './ShowDescription.module.css';
import { LuSearch } from 'react-icons/lu';
import { LuImage } from 'react-icons/lu';
import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';
import { VisibleLabel } from '../../../VisibleLabel/VisibleLabel';

export const ShowDescription = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button className={styles.actionButton} onClick={handleOpen}>
        <LuSearch size={17} />
      </button>
      <Modal open={open} onClose={handleClose}>
        <Card className={styles.card}>
          <header className={styles.header}>
            <div className={styles.closeContainer}>
              <GrFormClose size={30} onClick={handleClose} className={styles.iconClose} />
            </div>
            <div>
              <h2 className={styles.title}>Detalhes do Medicamento</h2>
            </div>
          </header>
          <div className={styles.imageContainer}>
            {data.image ? (
              <img src={data.image} alt="Imagem do produto" className={styles.image} />
            ) : (
              <div className={styles.iconContainer}>
                <LuImage className={styles.icon} />
              </div>
            )}
          </div>
          <div>
            <h3 className={styles.subtitle}>Nome:</h3>
            <p className={styles.text}>{data.nome}</p>
            <h3 className={styles.subtitle}>Laboratório:</h3>
            <p className={styles.text}>{data.laboratorio}</p>
            <h3 className={styles.subtitle}>Apresentação:</h3>
            <p className={styles.text}>{data.apresentacao}</p>
            <h3 className={styles.subtitle}>Descrição:</h3>
            <p className={styles.text}>{data.descricao}</p>
            <div className={styles.subgrid}>
              <div>
                <h3 className={styles.subtitle}>Código de Barras:</h3>
                <p className={styles.text}>{data.codigoDeBarras}</p>
              </div>
              <div>
                <h3 className={styles.subtitle}>Preço:</h3>
                <p className={styles.text}>R$ {data.preco.toFixed(2)}</p>
              </div>
            </div>
            <VisibleLabel className={styles.visibleLabel} isVisible={data.exibirCatalogo} />
          </div>
        </Card>
      </Modal>
    </>
  );
};
