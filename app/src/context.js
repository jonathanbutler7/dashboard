import React, { useContext, useState, useEffect, useReducer } from 'react';
import { useInterval } from './helpers/useInterval';
import { randomGenerator } from './store/generator';
import { reducer } from './store/reducer';
const DashboardContext = React.createContext();

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }) {
  const [isRunning, setIsRunning] = useState(true);
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState(messages);
  const [state, dispatch] = useReducer(reducer, messages);
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
    select,
    setSelect,
    filteredMessages,
    setFilteredMessages,
    state,
    dispatch,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
