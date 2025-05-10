import React from "react";
import { useField } from "formik";
import { LabelInputs } from "../../Labels/LabelInputs";
import styles from "../Input/Input.module.css";

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "");
  const area = digits.substring(0, 2);
  const digit3 = digits.substring(2, 3);
  const firstPart = digits.substring(3, 7);
  const secondPart = digits.substring(7, 11);

  let formatted = "";
  if (area) {
    formatted += `(${area}`;
    if (area.length === 2) {
      formatted += `)`;
    }
  }
  if (digit3) {
    formatted += ` ${digit3}`;
  }
  if (firstPart) {
    formatted += ` ${firstPart}`;
  }
  if (secondPart) {
    formatted += `-${secondPart}`;
  }

  return formatted;
};

export const TelefoneInput = ({
  name,
  label,
  placeholder = "",
  required,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (e) => {
    const maskedValue = formatPhone(e.target.value);
    helpers.setValue(maskedValue);
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
        <div className="errorMessage">{meta.error}</div>
      )}
    </div>
  );
};
