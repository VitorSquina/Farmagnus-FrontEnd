import React from "react";
import styles from "./Modal.module.css";
import { ModalDescription } from "./ModalDescription/ModalDescription";

export const Modal = ({ handleToogleModal, data, children }) => {
  return (
    <div className={styles.container}>
      {data ? (
        <ModalDescription handleToogleModal={handleToogleModal} data={data} />
      ) : (
        <>
          <ModalDescription handleToogleModal={handleToogleModal}>
            {children}
          </ModalDescription>
        </>
      )}
    </div>
  );
};
