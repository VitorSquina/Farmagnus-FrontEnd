import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import styles from './TabelaHistorico.module.css';
import { SendWhatsAppMessage } from '../../../components/SendWhatsappMessage/SendWhatsAppMessage';
import { DetalharPedido } from './components/Actions/DetalharPedido/DetalharPedido';
import { StatusLabel } from './components/StatusLabel/StatusLabel';

export const TabelaHistorico = ({ data }) => {
  return (
    <>
      <TableContainer component={Paper} className={styles.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.headerRowStyles}>ID</TableCell>
              <TableCell className={styles.headerRowStyles}>Cliente</TableCell>
              <TableCell className={styles.headerRowStyles}>Data</TableCell>
              <TableCell className={styles.headerRowStyles}>Status</TableCell>
              <TableCell className={styles.headerRowStyles}>Total</TableCell>
              <TableCell className={styles.headerRowStyles}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((pedido) => (
              <TableRow key={pedido.id}>
                <TableCell>#{pedido.id}</TableCell>
                <TableCell>{pedido.cliente}</TableCell>
                <TableCell>{pedido.data}</TableCell>
                <TableCell>
                  <StatusLabel status={pedido.status} />
                </TableCell>
                <TableCell>{pedido.total}</TableCell>
                <TableCell sx={{ display: 'flex' }}>
                  <DetalharPedido data={pedido} />
                  <SendWhatsAppMessage data={pedido} icon={true} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
