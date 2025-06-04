import { GrFormClose } from 'react-icons/gr';
import { SendWhatsAppMessage } from '../../SendWhatsappMessage/SendWhatsAppMessage';
import styles from './ModalDescription.module.css';
export const ModalDescription = ({ handleToogleModal, data, children }) => {
  return (
    <div>
      <div className={styles.content}>
        {data ? (
          <>
            <header className={styles.closeIconContainer}>
              <GrFormClose size={30} onClick={handleToogleModal} className={styles.icon} />
            </header>
            <main className={styles.description}>
              <h2 className={styles.title}>Detalhes do Pedido #{`${data.numPedido}`}</h2>
              <h3 className={styles.subtitle}>Informações do cliente</h3>
              <section className={styles.text}>
                <p className={styles.textRow}>
                  <b>Nome: </b>
                  {data.nomeCliente}
                </p>
                <p className={styles.textRow}>
                  <b>Endereço: </b>
                  {data.enderecoCliente}, {data.numEndereco}
                </p>
                <p>
                  <SendWhatsAppMessage data={data} />
                </p>
              </section>
              <h3 className={styles.subtitle}>Produtos</h3>
              <section className={styles.text}></section>
              <section>
                <h4>Status</h4>
              </section>
              <footer></footer>
            </main>
          </>
        ) : (
          <>
            <header className={styles.closeIconContainer}>
              <GrFormClose size={30} onClick={handleToogleModal} className={styles.icon} />
            </header>
            {children}
          </>
        )}
      </div>
    </div>
  );
};
