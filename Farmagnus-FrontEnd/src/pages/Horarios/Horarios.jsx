import { FirstTemplate } from '../../Templates/FirstTemplate/FirstTemplate';
import { Header } from './components/Header/Header';
import { HorariosEntrega } from './components/HorariosEntregas/HorariosEntrega';
import { HorariosFarmacia } from './components/HorariosFarmacia/HorariosFarmacia';
import { HorariosFeriados } from './components/HorariosFeriados/HorariosFeriados';
import styles from './Horarios.module.css';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

export const Horarios = () => {
  const horariosFuncionamento = [
    {
      diaSemana: 'Segunda-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Terça-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Quarta-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Quinta-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Sexta-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Sábado',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Domingo',
      horarios: [],
    },
  ];
  const horariosEntregas = [
    {
      diaSemana: 'Segunda-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Terça-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Quarta-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Quinta-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Sexta-Feira',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Sábado',
      horarios: [
        {
          horaAbertura: '08:00',
          horaFechamento: '20:00',
        },
      ],
    },
    {
      diaSemana: 'Domingo',
      horarios: [],
    },
  ];

  return (
    <FirstTemplate>
      <div className={styles.container}>
        <Header />
        <Tabs className={styles.tabs}>
          <TabList className={styles.tabList}>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Horario da Farmácia
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Horario de Entregas
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tabItem}>
              Feriado
            </Tab>
          </TabList>

          <TabPanel className={styles.tabPanel}>
            <HorariosFarmacia data={horariosFuncionamento} />
          </TabPanel>
          <TabPanel className={styles.tabPanel}>
            <HorariosEntrega data={horariosEntregas} />
          </TabPanel>
          <TabPanel className={styles.tabPanel}>
            <HorariosFeriados />
          </TabPanel>
        </Tabs>
      </div>
    </FirstTemplate>
  );
};
