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
  let [messages, setMessages] = useState([]);
  let [state, dispatch] = useReducer(reducer, messages);
  const [snackbar, setSnackbar] = useState('');
  const [select, setSelect] = useState('view all');

  let msgsInView = state;
  if (select !== 'view all') {
    msgsInView = state.filter((message) => message.level === select);
  }
  if (select === 'view all') {
    msgsInView = state;
  }

  useInterval(
    () => {
      const newMsg = randomGenerator();
      const newMsgs = [...messages, { ...newMsg, edit: false, confirm: false }];
      setMessages(newMsgs);
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
    msgsInView,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
