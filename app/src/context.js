import React, { useContext, useState, createContext } from 'react';
import { useInterval } from './useInterval';
import { randomGenerator } from './store/generator';
const DashboardContext = createContext();

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }) {
  const [isRunning, setIsRunning] = useState(true);
  const [messages, setMessages] = useState([]);
  const [snackbar, setSnackbar] = useState('');
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [openEditModal, setOpenEditModal] = useState(false);
  const [id, setId] = useState(null);

  function clearAll() {
    setMessages([]);
    setSnackbarMsg('Deleted all messages');
    setSnackbar(true);
  }

  function closeEditModal() {
    setOpenEditModal(false);
    setIsRunning(true);
  }

  useInterval(
    () => {
      const newMsg = randomGenerator();
      const newSet = [...messages, newMsg];
      setMessages(newSet);
    },
    isRunning ? 2000 : null
  );

  const value = {
    messages,
    setMessages,
    isRunning,
    setIsRunning,
    clearAll,
    snackbarMsg,
    setSnackbarMsg,
    snackbar,
    setSnackbar,
    openEditModal,
    setOpenEditModal,
    closeEditModal,
    id,
    setId,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
