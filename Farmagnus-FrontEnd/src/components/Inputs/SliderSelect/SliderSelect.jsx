import React from 'react';
import styles from './SliderSelect.module.css';

export default function SliderSelect({ label, checked, onChange }) {
  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.slider}></span>
      <span className={styles.labelText}>{label}</span>
    </label>
  );
}
