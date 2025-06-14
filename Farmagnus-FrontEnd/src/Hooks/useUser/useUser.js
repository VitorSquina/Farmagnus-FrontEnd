import axios from 'axios';
import { useState } from 'react';

const API_URL = 'http://localhost:8080/auth/register';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const createUser = async (userData) => {
    setIsLoading(true);
    try {
      const res = await axios.post(API_URL, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setUsers((prev) => [...prev, res.data]);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    users,
    isLoading,
    error,
    createUser,
  };
};
