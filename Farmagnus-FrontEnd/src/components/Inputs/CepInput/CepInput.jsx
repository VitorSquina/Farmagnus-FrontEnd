import { useField } from "formik";
import { ErrorMessage } from "formik";
import styles from "../Input/Input.module.css";
import { LabelInputs } from "../../Labels/LabelInputs";

const formatCEP = (value) => {
  const digits = value.replace(/\D/g, "");
  const part1 = digits.slice(0, 5);
  const part2 = digits.slice(5, 8);
  let result = part1;
  if (part2) result += `-${part2}`;
  return result;
};

const handleSearch = () => {
  console.log("Search button clicked");
};

export const CepInput = ({
  name,
  label,
  placeholder = "",
  required,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (e) => {
    const formattedValue = formatCEP(e.target.value);
    helpers.setValue(formattedValue);
  };

  return (
    <div className={styles.container}>
      <LabelInputs label={label || name} required={required} />
      <div className={styles.inputContainer}>
        <input
          {...field}
          {...props}
          placeholder={placeholder}
          onChange={handleChange}
          className={styles.input}
        />
        <button
          type={"button"}
          onClick={handleSearch}
          className="secondaryButton"
        >
          <p>Buscar</p>
        </button>
      </div>
      {meta.touched && meta.error && (
        <ErrorMessage className="errorMessage">{meta.error}</ErrorMessage>
      )}
    </div>
  );
};
