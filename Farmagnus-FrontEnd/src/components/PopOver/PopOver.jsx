import styles from "./PopOver.module.css";

export const PopOver = ({ title, text, children }) => {
  return (
    <div className={styles.container}>
      <h1 className="tittle">{title}</h1>
      <p className="text">{text}</p>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
