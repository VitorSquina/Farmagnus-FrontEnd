import styles from "./Danger.module.css";
import { PopUp } from "../PopUp/PopUp";

export const Danger = ({ children }) => {
  return (
    <div className={styles.container}>
      <PopUp>{children}</PopUp>
    </div>
  );
};
