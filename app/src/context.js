import React, { useContext, useState, createContext, useEffect } from 'react';
import { useInterval } from './helpers/useInterval';
import { randomGenerator } from './store/generator';
const DashboardContext = createContext();

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }) {
  const [isRunning, setIsRunning] = useState(true);
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState(messages);
  const [snackbar, setSnackbar] = useState('');
  const [select, setSelect] = useState('');
  const [id, setId] = useState(null);

  useInterval(
    () => {
      const newMsg = randomGenerator();
      const newSet = [...messages, newMsg];
      setMessages(newSet);
    },
    isRunning ? 2000 : null
  );

  useEffect(() => {
    if (select === 'view all') {
      setFilteredMessages(messages);
    } else if (select) {
      setFilteredMessages(
        messages.filter((message) => message.level === select)
      );
    } else {
      setFilteredMessages(messages);
    }
  }, [messages, select]);

  function clearAll() {
    setMessages([]);
    setSnackbar('Deleted all messages');
  }

  const value = {
    messages,
    setMessages,
    isRunning,
    setIsRunning,
    clearAll,
    snackbar,
    setSnackbar,
    id,
    setId,
    select,
    setSelect,
    filteredMessages,
    setFilteredMessages,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
