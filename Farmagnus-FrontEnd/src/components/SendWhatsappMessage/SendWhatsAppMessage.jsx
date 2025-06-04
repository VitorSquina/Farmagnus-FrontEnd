import React from 'react';
import styles from './SendWhatsAppMessage.module.css';
export const SendWhatsAppMessage = ({ data }) => {
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

  return (
    <p className={styles.textOrderDescription}>
      Whatsapp:
      <button className="link" onClick={() => handleWhatsAppClick(data)}>
        {data.numWhatsapp}
      </button>
    </p>
  );
};
