import React, { useContext, useState, createContext, useReducer } from 'react';
import { useInterval } from './helpers/useInterval';
import { randomGenerator } from './store/generator';
import { reducer } from './store/reducer';
const DashboardContext = createContext();

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }) {
  const [isRunning, setIsRunning] = useState(true);
  const [messages, setMessages] = useState([]);
  const [state, dispatch] = useReducer(reducer, messages);
  const [filteredMessages, setFilteredMessages] = useState(state);
  const [snackbar, setSnackbar] = useState('');
  const [select, setSelect] = useState('');

  useInterval(
    () => {
      const newMsg = randomGenerator();
      const newSet = [...messages, { ...newMsg, edit: false, confirm: false }];
      setMessages(newSet);
    },
    isRunning ? 2000 : null
  );

  const value = {
    messages,
    isRunning,
    setIsRunning,
    snackbar,
    setSnackbar,
    select,
    setSelect,
    state,
    dispatch,
    filteredMessages,
    setFilteredMessages,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
