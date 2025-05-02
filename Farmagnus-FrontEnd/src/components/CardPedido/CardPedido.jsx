import styles from "./CardPedido.module.css";

export const CardPedido = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
