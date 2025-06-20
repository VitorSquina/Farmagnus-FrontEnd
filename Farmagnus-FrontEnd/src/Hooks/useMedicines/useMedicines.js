import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = 'http://127.0.0.1:8080/medicamento';

export const useMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchMedicines = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_URL);
      setMedicines(res.data);
    } catch (err) {

      setError(err.message || 'Erro ao buscar medicamentos');
      console.error('Error fetching medicines:', error);

    } finally {
      setIsLoading(false);
    }
  };


  /**
  const getMedicineById = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      setError(err.message || 'Erro ao buscar medicamentos');
    } finally {
      await fetchMedicines();
    }
  };
  **/

  const createMedicine = async (medicineData) => {
    setIsLoading(true);
    try {
      await axios.post(API_URL, medicineData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      setError(err.message || 'Erro ao criar medicamento');
      console.error('Error creating medicine:', error);
    } finally {
      setIsLoading(false);
      await fetchMedicines();
    }
  };

  const deleteMedicine = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (err) {
      setError(err.message || 'Erro ao excluir medicamento');
      console.error('Error deleting medicine:', error);
    } finally {
      setIsLoading(false);
      await fetchMedicines();
    }
  };

  const editMedicine = async (id, medicineData) => {
    setIsLoading(true);
    try {
      await axios.put(`${API_URL}/${id}`, medicineData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      setError(err.message || 'Erro ao editar medicamento');
      console.error('Error editing medicine:', error);
    } finally {
      setIsLoading(false);
      await fetchMedicines();
    }
  };
  const changeVisibility = async (id, exibir) => {
    setIsLoading(true);
    try {
      await axios.patch(`${API_URL}/${id}/catalogo?exibir=${exibir}`, null, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      setError(err.message || 'Erro ao alterar visibilidade do medicamento');
      console.error('Error changing visibility:', error);
    } finally {
      setIsLoading(false);
      await fetchMedicines();
    }
  };
  const searchMedicines = async (value) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_URL}/filter?filtro=${value}`);
      return res.data;
    } catch (err) {
      setError(err.message || 'Erro ao pesquisar por medicamentos');
      console.error('Error searching medicines:', error);
      return [];

    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);
  return {
    medicines,
    fetchMedicines,
    createMedicine,
    editMedicine,
    deleteMedicine,
    changeVisibility,
    searchMedicines,
  };
};
