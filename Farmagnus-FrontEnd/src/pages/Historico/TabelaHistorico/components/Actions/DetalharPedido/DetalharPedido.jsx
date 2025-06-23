import { Box, Button, Card, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { LuFileText } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import styles from './DetalharPedido.module.css';
import { SendWhatsAppMessage } from '../../../../../../components/SendWhatsappMessage/SendWhatsAppMessage';

export const DetalharPedido = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} sx={{ color: 'black' }}>
        <LuFileText />
      </Button>
      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <Card className={styles.modalCard}>
          <Box className={styles.modalHeader}>
            <Typography
              variant="h5"
              component="h2"
              className={styles.modalTitle}
              sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'bottom' }}
            >
              Detalhes do Pedido #{data.id}
            </Typography>
            <IoClose size={20} onClick={handleClose} className={styles.closeButton} />
          </Box>
          <Box className={styles.modalContent}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: '1rem',
                textAlign: 'bottom',
                marginTop: '1rem',
              }}
            >
              Informações do Cliente
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={styles.modalText}
              sx={{ textAlign: 'left' }}
            >
              Nome: {data.cliente} <br /> Endereço: {data.endereco || 'Não informado'} <br />
              <SendWhatsAppMessage data={data} />
            </Typography>
          </Box>
          <Box className={styles.modalContent}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: '1rem',
                textAlign: 'bottom',
                marginTop: '1rem',
              }}
            >
              Produtos
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={styles.modalText}
              sx={{ textAlign: 'left' }}
            >
              {data.produtos && data.produtos.length > 0 ? (
                data.produtos.map((produto, index) => (
                  <div key={index}>
                    <strong>Produto:</strong> {produto.nome} <br />
                    <strong>Quantidade:</strong> {produto.quantidade} <br />
                    <strong>Preço:</strong> R$ {produto.preco.toFixed(2)} <br />
                    <hr />
                  </div>
                ))
              ) : (
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  Nenhum produto encontrado.
                </Typography>
              )}
            </Typography>
          </Box>
        </Card>
      </Modal>
    </>
  );
};
