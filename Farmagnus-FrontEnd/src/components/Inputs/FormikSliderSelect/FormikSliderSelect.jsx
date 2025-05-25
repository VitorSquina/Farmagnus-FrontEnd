import React from 'react';
import { useField } from 'formik';
import SliderSelect from '../SliderSelect/SliderSelect';

export function FormikSliderSelect({ name, label }) {
  const [field, , helpers] = useField({ name, type: 'checkbox' });

  return (
    <SliderSelect
      label={label}
      checked={field.value}
      onChange={() => helpers.setValue(!field.value)}
    />
  );
}
