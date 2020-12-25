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
