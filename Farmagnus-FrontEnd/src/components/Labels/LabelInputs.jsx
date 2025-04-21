import styles from "./LabelInputs.module.css";

export const LabelInputs = ({ label, required, children }) => {
  return (
    <div>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>

      <div className={styles.inputContainer}>{children}</div>
    </div>
  );
};
