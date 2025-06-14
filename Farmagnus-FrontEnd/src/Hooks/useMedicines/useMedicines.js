import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8080/medicamento';

export const useMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMedicines = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_URL);
      setMedicines(res.data);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Erro ao buscar medicamentos');
    } finally {
      setIsLoading(false);
    }
  };

  const createMedicine = async (medicineData) => {
    setIsLoading(true);
    try {
      const res = await axios.post(API_URL, medicineData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMedicines((prev) => [...prev, res.data]);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Erro ao criar medicamento');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteMedicine = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMedicines((prev) => prev.filter((medicine) => medicine.id !== id));
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Erro ao excluir medicamento');
    } finally {
      setIsLoading(false);
    }
  };

  const editMedicine = async (id, medicineData) => {
    setIsLoading(true);
    try {
      const res = await axios.put(`${API_URL}/${id}`, medicineData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMedicines((prev) => prev.map((medicine) => (medicine.id === id ? res.data : medicine)));
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Erro ao editar medicamento');
    } finally {
      setIsLoading(false);
    }
  };
  const changeVisibility = async (id, exibir) => {
    setIsLoading(true);
    try {
      const res = await axios.patch(`${API_URL}/${id}/catalogo?exibir=${exibir}`, null, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMedicines((prev) => prev.map((medicine) => (medicine.id === id ? res.data : medicine)));
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || 'Erro ao alterar visibilidade do medicamento'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadMedicines = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(API_URL);
        if (isMounted) {
          setMedicines(res.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err?.response?.data?.message || err.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadMedicines();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    medicines,
    isLoading,
    error,
    fetchMedicines,
    createMedicine,
    editMedicine,
    deleteMedicine,
    changeVisibility,
  };
};
