import { Card } from '../Card/Card';
import styles from './AguardandoPagamento.module.css';
import { ButtonModal } from '../../../../components/ButtonModal/ButtonModal';
import { Box, Button, Typography } from '@mui/material';

export const AguardandoPagamento = ({ data }) => {
  const handleFaturar = () => {};

  return (
    <>
      {data.map((i) => (
        <Card key={i.numPedido} data={i}>
          <div className={styles.orderButtons}>
            <div>
              <ButtonModal
                className="secondaryButton"
                name={'Ver Detalhes'}
                data={i}
                description={true}
              />
            </div>
            <div className={styles.confirmPaymentButtonContainer}>
              <ButtonModal
                name="Confirmar Pagamento"
                className="primaryButton"
                onClick={handleFaturar}
                description={false}
              >
                <Box
                  sx={{
                    padding: '0 1rem ',
                  }}
                >
                  <Typography
                    component={'h2'}
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      marginBottom: '1rem',
                      marginRight: '2rem',
                    }}
                  >
                    Selecione se o cliente deseja entrega ou retirada
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      margin: '5rem',
                    }}
                  >
                    <Button variant="outlined" color="black" sx={{ marginRight: '1rem' }}>
                      Retirada
                    </Button>
                    <Button
                      variant="contained"
                      color="black"
                      sx={{ marginRight: '1rem', backgroundColor: '#000', color: '#fff' }}
                    >
                      Entrega
                    </Button>
                  </Box>
                </Box>
              </ButtonModal>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
