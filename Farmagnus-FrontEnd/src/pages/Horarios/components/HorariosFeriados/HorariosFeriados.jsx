import { LuClock, LuPlus, LuTrash } from 'react-icons/lu';
import styles from './HorariosFeriados.module.css';
import { Box, Card, Typography, Switch, Button } from '@mui/material';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs from 'dayjs';

export const HorariosFeriados = ({ data }) => {
  const [feriadosAtivos, setFeriadosAtivos] = useState(data.map(() => true));
  const handleAddHorario = (diaIndex) => {
    const novoHorario = {
      horaAbertura: '00:00',
      horaFechamento: '00:00',
    };
    data[diaIndex].horarios.push(novoHorario);
  };

  const toggleFeriado = (index) => {
    setFeriadosAtivos((prev) => {
      const novo = [...prev];
      novo[index] = !novo[index];
      return novo;
    });
  };

  return (
    <div className={styles.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            alignItems: 'center',
          }}
        >
          <Box
            className={styles.box}
            sx={{
              marginBottom: '1rem',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
              component={'h2'}
            >
              Feriados
            </Typography>
            <Typography
              sx={{ fontSize: '.9rem', textAlign: 'left', color: '#8b8b8d' }}
              component={'p'}
            >
              Configure os horários de funcionamento e entrega para feriados específicos. Você pode
              desativar as entregas ou definir horários especiais.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              width: '20%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LuPlus size={18} style={{ marginRight: '0.25rem' }} />
            <b>Adicionar Feriado</b>
          </Button>
        </Box>

        <div className={styles.horariosContainer}>
          {data.map((item, index) => (
            <Card
              key={index}
              className={styles.horarioItem}
              sx={{ padding: '1rem', marginBottom: '1rem', backgroundColor: '#FBFBFB' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '.5rem',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Switch
                    checked={feriadosAtivos[index]}
                    onChange={() => toggleFeriado(index)}
                    color="black"
                  />
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {item.nomeFeriado} - {item.dataFeriado}
                  </Typography>
                </Box>
                <Button
                  color="black"
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: 'var(--secondary-button-border-color)',
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  }}
                  fontSize="0.7rem"
                  onClick={handleAddHorario}
                >
                  <LuPlus size={16} style={{ marginRight: '0.25rem' }} />
                  <b>Adicionar Horário</b>
                </Button>
              </Box>

              {feriadosAtivos[index] ? (
                item.horarios.length > 0 ? (
                  item.horarios
                    .filter((horario) => horario.horaAbertura && horario.horaFechamento)
                    .map((horario, idx) => (
                      <Box
                        key={idx}
                        component="form"
                        onSubmit={(e) => e.preventDefault()}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          marginBottom: '0.5rem',
                        }}
                      >
                        <LuClock color="gray" size={17} />
                        <Typography sx={{ fontSize: '.9rem' }}>Das</Typography>
                        <TimeField
                          format="HH:mm"
                          defaultValue={dayjs(horario.horaAbertura, 'HH:mm')}
                          value={dayjs(horario.horaAbertura, 'HH:mm')}
                          slotProps={{
                            textField: {
                              sx: {
                                '& .MuiInputBase-root': {
                                  height: '32px',
                                  fontSize: '0.85rem',
                                },
                                '& input': {
                                  padding: '6px 8px',
                                },
                              },
                            },
                          }}
                        />
                        <Typography sx={{ fontSize: '.9rem' }}>às</Typography>
                        <TimeField
                          format="HH:mm"
                          defaultValue={dayjs(horario.horaFechamento, 'HH:mm')}
                          value={dayjs(horario.horaFechamento, 'HH:mm')}
                          slotProps={{
                            textField: {
                              sx: {
                                '& .MuiInputBase-root': {
                                  height: '32px',
                                  fontSize: '0.85rem',
                                },
                                '& input': {
                                  padding: '6px 8px',
                                },
                              },
                            },
                          }}
                        />
                        <Button
                          sx={{ marginLeft: '.5rem', height: '2.5rem', width: '2.5rem' }}
                          variant="text"
                          color="error"
                        >
                          <LuTrash color="gray" />
                        </Button>
                      </Box>
                    ))
                ) : (
                  <Typography
                    sx={{ fontSize: '.9rem', color: '#8b8b8d', textAlign: 'left' }}
                    component={'p'}
                  >
                    Nenhum horário configurado. Clique em "Adicionar Horário" para configurar.
                  </Typography>
                )
              ) : (
                <Typography
                  sx={{ fontSize: '.9rem', color: '#8b8b8d', textAlign: 'left' }}
                  component={'p'}
                >
                  Entregas não disponíveis neste dia.
                </Typography>
              )}
            </Card>
          ))}
        </div>
      </LocalizationProvider>
    </div>
  );
};
