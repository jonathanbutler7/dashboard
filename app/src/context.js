import React, { useContext, useState, createContext, useEffect } from 'react';
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
  const [select, setSelect] = useState('');
  const [chosenMessages, setChosenMessages] = useState(messages);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (select === 'view all') {
      setChosenMessages(messages)
    }
    else if (select) {
      setChosenMessages(messages.filter((message) => message.level === select));
    } else {
      setChosenMessages(messages);
    }
  }, [messages, select]);
  
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
    select,
    setSelect,
    chosenMessages,
    setChosenMessages,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
