import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styles from '../Input/Input.module.css';
import { LabelInputs } from '../../Labels/LabelInputs';

const formatCNPJ = (value) => {
  const digits = value.replace(/\D/g, '');
  const part1 = digits.slice(0, 2);
  const part2 = digits.slice(2, 5);
  const part3 = digits.slice(5, 8);
  const part4 = digits.slice(8, 12);
  const part5 = digits.slice(12, 14);
  let result = part1;
  if (part2) result += `.${part2}`;
  if (part3) result += `.${part3}`;
  if (part4) result += `/${part4}`;
  if (part5) result += `-${part5}`;
  return result;
};

export const CnpjInput = ({ name, label, placeholder = '', required, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (e) => {
    const formattedValue = formatCNPJ(e.target.value);
    helpers.setValue(formattedValue);
  };

  return (
    <div className={styles.container}>
      <LabelInputs label={label || name} required={required} />
      <input
        {...field}
        {...props}
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.input}
      />
      {meta.touched && meta.error && (
        <ErrorMessage className="errorMessage">{meta.error}</ErrorMessage>
      )}
    </div>
  );
};
