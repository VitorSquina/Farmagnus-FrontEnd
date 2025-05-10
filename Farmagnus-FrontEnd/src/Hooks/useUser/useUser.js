// npm
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://127.0.0.1:8080/user";

export const useUsers = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createUser = async (userData) => {
    setIsLoading(true);
    try {
      const res = await axios.post(API_URL, userData);
      setUsers((prev) => [...prev, res.data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (id, updates) => {
    setIsLoading(true);
    try {
      const res = await axios.patch(`${API_URL}/${id}`, updates);
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? res.data : user))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return {
    users,
    isLoading,
    error,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
  };
};
