import { createContext, useContext } from 'react';
import { useMedicines } from '../../Hooks/useMedicines/useMedicines';

const MedicinesContext = createContext(null);

export const MedicinesProvider = ({ children }) => {
  const medicinesHook = useMedicines();
  console.log('Medicines no contexto:', medicinesHook.medicines);
  return <MedicinesContext.Provider value={medicinesHook}>{children}</MedicinesContext.Provider>;
};

export const useMedicinesContext = () => {
  const context = useContext(MedicinesContext);
  if (!context) {
    throw new Error('useMedicinesContext deve ser usado dentro de MedicinesProvider');
  }
  return context;
};
