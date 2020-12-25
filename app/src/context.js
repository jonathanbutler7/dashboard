import React, {
  useContext,
  useState,
  createContext,
  useReducer,
  useEffect,
} from 'react';
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
  const [select, setSelect] = useState('view all');

  useInterval(
    () => {
      const newMsg = randomGenerator();
      const newMsgs = [...messages, { ...newMsg, edit: false, confirm: false }];
      setMessages(newMsgs);
    },
    isRunning ? 2000 : null
  );
  
  let pickem = state;
  if (select !== 'view all') {
    pickem = messages.filter((message) => message.level === select);
  }
  if (select === 'view all') {
    pickem = messages;
  }

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
    pickem
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
