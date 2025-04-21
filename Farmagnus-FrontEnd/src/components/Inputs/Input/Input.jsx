import { Field, ErrorMessage } from "formik";
import styles from "./Input.module.css";
import { LabelInputs } from "../../Labels/LabelInputs";

export const Input = ({
  name,
  type = "text",
  label,
  placeholder = "",
  required,
  ...props
}) => {
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
      <ErrorMessage name={name} className="errorMessage" component="span" />
    </div>
  );
};
