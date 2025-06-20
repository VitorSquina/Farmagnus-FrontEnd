import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Input } from '../../../../../../../../components/Inputs/Input/Input';
import styles from './FormEditMedicine.module.css';

import { GrFormClose } from 'react-icons/gr';

import Modal from '@mui/material/Modal';
import { FaRegEdit } from 'react-icons/fa';
import { useMedicinesContext } from '../../../../../../../../contexts/medicines/MedicinesContext';

import { useState } from 'react';
import { Card } from '@mui/material';

export const FormEditMedicine = ({ id, data }) => {
  const { fetchMedicines, editMedicine } = useMedicinesContext();
  const iconSize = 17;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button className={styles.actionButton} onClick={handleOpen}>
        <FaRegEdit size={iconSize} />
      </button>
      <Modal open={open} onClose={handleClose}>
        <Card className={styles.card}>
          <header className={styles.header}>
            <div>
              <h2 className={styles.title}>Editar Medicamento</h2>
              <h3 className={styles.description}>Edite as informações do medicamento abaixo.</h3>
            </div>
            <div>
              <GrFormClose size={30} onClick={handleClose} className={styles.icon} />
            </div>
          </header>
          <Formik
            className={styles.container}
            initialValues={{
              nome: data.nome,
              laboratorio: data.laboratorio,
              codigoDeBarras: data.codigoDeBarras,
              apresentacao: data.apresentacao,
              descricao: data.descricao,
              exibirCatalogo: data.catalogo,
              preco: data.preco,
              imagem: '',
            }}
            onSubmit={(values) => {
              editMedicine(id, values);

              fetchMedicines();
              handleClose();
            }}
            validationSchema={Yup.object({
              nome: Yup.string().required('Nome é obrigatório'),
              laboratorio: Yup.string().required('Laboratório é obrigatório'),
              codigoDeBarras: Yup.string().required('Código de barras é obrigatório'),
              apresentacao: Yup.string().required('Apresentação é obrigatória'),
              // descricao: Yup.string().required('Descrição é obrigatória'),
              exibirCatalogo: Yup.boolean(),
              preco: Yup.number()
                .typeError('Preço deve ser um número')
                .required('Preço é obrigatório'),
              // imagem: Yup.mixed().required('Imagem é obrigatória'),
            })}
          >
            <Form>
              <div className={styles.form}>
                <div className={styles.inputsContainer}>
                  <Input name="nome" type="text" placeholder="Nome do Medicamento" label="Nome" />
                  <Input
                    name="codigoDeBarras"
                    type="text"
                    placeholder="Código de Barras"
                    label="Código de Barras"
                  />
                  <Input name="preco" type="number" placeholder="Preço (R$)" label="Preço (R$)" />
                  <Input
                    name="laboratorio"
                    type="text"
                    placeholder="Laboratório"
                    label="Laboratório"
                  />
                  <Input
                    name="apresentacao"
                    type="text"
                    placeholder="Apresentação"
                    label="Apresentação"
                  />
                  <Input
                    name="descricao"
                    type="text"
                    placeholder="Descrição do Medicamento"
                    label="Descrição"
                  />

                  <div className={styles.fileInputContainer}>
                    <input
                      id="imgInput"
                      type="file"
                      placeholder="Escolher Imagem"
                      className={styles.fileButton}
                    />
                    <label htmlFor="imgInput" className="secondaryButton">
                      Clique para adicionar uma imagem
                    </label>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button}>
                    <button className="secondaryButton" onClick={handleClose}>
                      Cancelar
                    </button>
                    <button className="primaryButton" type="submit">
                      Salvar
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </Card>
      </Modal>
    </>
  );
};
