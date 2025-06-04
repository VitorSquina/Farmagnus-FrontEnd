import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const ButtonModal = ({ className, name, data, children }) => {
  const [isActive, setIsActive] = useState('');
  const handleToogleModal = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <button className={className} onClick={handleToogleModal}>
        {name}
      </button>
      {isActive && (
        <Modal data={data} handleToogleModal={handleToogleModal}>
          {children}
        </Modal>
      )}
    </>
  );
};
