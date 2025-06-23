import styles from './SendWhatsAppMessage.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export const SendWhatsAppMessage = ({ data, icon }) => {
  const nomeEmpresa = 'Farmagnus';

  const handleWhatsAppClick = (data) => {
    const message = encodeURIComponent(
      'Olá ' +
        data.nomeCliente +
        ' represento a ' +
        nomeEmpresa +
        ', e estou entrando em contato sobre o pedido #' +
        data.numPedido
    );
    const url = `https://web.whatsapp.com/send?phone=${data}&text=${message}`;
    window.open(url, '_blank');
  };
  if (icon)
    return (
      <button className={styles.button} onClick={() => handleWhatsAppClick(data.numWhatsapp)}>
        <FaWhatsapp className={styles.icon} />
      </button>
    );
  return (
    <p className={styles.textOrderDescription}>
      Whatsapp:
      <button className="link" onClick={() => handleWhatsAppClick(data)}>
        {data.numWhatsapp}
      </button>
    </p>
  );
};
