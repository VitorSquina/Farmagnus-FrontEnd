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
      setError(err.message);
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
      setMedicines((prev) => [...prev, res.medicineData]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);
  return {
    medicines,
    isLoading,
    error,
    createMedicine,
    fetchMedicines,
  };
};
