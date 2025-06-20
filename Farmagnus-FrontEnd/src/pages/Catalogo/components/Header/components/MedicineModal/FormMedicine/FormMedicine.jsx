import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../../../../../../components/Inputs/Input/Input';
import styles from './FormMedicine.module.css';
import { useMedicinesContext } from '../../../../../../../contexts/medicines/MedicinesContext';
export const FormMedicine = ({ buttonName, type, id }) => {
  const { createMedicine, fetchMedicines, editMedicine } = useMedicinesContext();
  return (
    <Formik
      className={styles.container}
      initialValues={{
        nome: '',
        laboratorio: '',
        codigo_de_barras: '',
        apresentacao: '',
        descricao: '',
        exibit_catalogo: '',
        preco: '',
        imagem: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
      validationSchema={Yup.object({
        nome: Yup.string().required('Nome é obrigatório'),
        laboratorio: Yup.string().required('Laboratório é obrigatório'),
        codigo_de_barras: Yup.string().required('Código de barras é obrigatório'),
        apresentacao: Yup.string().required('Apresentação é obrigatória'),
        descricao: Yup.string().required('Descrição é obrigatória'),
        exibit_catalogo: Yup.boolean(),
        preco: Yup.number().typeError('Preço deve ser um número').required('Preço é obrigatório'),
        // imagem: Yup.mixed().required('Imagem é obrigatória'),
      })}
    >
      <Form>
        <div className={styles.form}>
          <div className={styles.inputsContainer}>
            <Input name="nome" type="text" placeholder="Nome do Medicamento" label="Nome" />
            <Input
              name="codigo_de_barras"
              type="text"
              placeholder="Código de Barras"
              label="Código de Barras"
            />
            <Input name="preco" type="number" placeholder="Preço (R$)" label="Preço (R$)" />
            <Input name="laboratorio" type="text" placeholder="Laboratório" label="Laboratório" />
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

            <FormikSliderSelect name="exibit_catalogo" label="Exibir no Catálogo do App" />
            <input type="file" placeholder="Escolher Imagem" />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <button className="primaryButton">Adicionar Medicamento</button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
