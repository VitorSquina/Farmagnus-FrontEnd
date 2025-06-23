import styles from './Historico.module.css';
import { Header } from './Header/Header';
import { FirstTemplate } from '../../Templates/FirstTemplate/FirstTemplate';
import { TabelaHistorico } from './TabelaHistorico/TabelaHistorico';

const pedidos = [
  {
    id: 1001,
    cliente: 'João Silva',
    data: '08/04/2023, 15:45',
    status: 'Concluído',
    total: 'R$ 20,73',
    numWhatsapp: '11987654321',
  },
  {
    id: 1002,
    cliente: 'Maria Oliveira',
    data: '09/04/2023, 11:30',
    status: 'Concluído',
    total: 'R$ 25,50',
    numWhatsapp: '11987654321',
  },
  {
    id: 1003,
    cliente: 'Carlos Pereira',
    data: '10/04/2023, 09:30',
    status: 'Cancelado',
    total: 'R$ 37,89',
    numWhatsapp: '11987654321',
  },
];

export const Historico = () => {
  return (
    <>
      <FirstTemplate>
        <Header />
        <TabelaHistorico data={pedidos} />
      </FirstTemplate>
    </>
  );
};
