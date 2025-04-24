import { Field, ErrorMessage } from "formik";
import styles from "./Input.module.css";
import { LabelInputs } from "../../Labels/LabelInputs";
import { Danger } from "../../Alert/Danger/Danger";
import { useState } from "react";

export const Input = ({
  name,
  type = "text",
  label,
  placeholder = "",
  required,
  ...props
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setErrorMessage("");
  };

  return (
    <div className={styles.container}>
      <LabelInputs label={label || name} required={required} />
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        required={required}
        {...props}
      />
      <ErrorMessage name={name} component={Danger} />
    </div>
  );
};
