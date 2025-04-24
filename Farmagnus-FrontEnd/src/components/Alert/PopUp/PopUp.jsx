import styles from "./PopUp.module.css";
import { RiCloseLargeLine } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";

export const PopUp = ({ onClose, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
