import { useState, useEffect } from 'react';
import { useInterval } from './useInterval';
import { randomGenerator } from './store/generator';
import Message from './Message';
import EditModal from './Modal';
import Snackbar from './Snackbar';
import Header from './Header';

function App() {
  const [messages, setMessages] = useState([]);
  const [isRunning, setIsRunning] = useState(true);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [id, setId] = useState(null);
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [sortValue, setSortValue] = useState('');

  useInterval(
    () => {
      const newMsg = randomGenerator();
      const newSet = [...messages, newMsg];
      setMessages(newSet);
    },
    isRunning ? 2000 : null
  );

  function clearAll() {
    setMessages([]);
    setSnackbarMsg('Deleted all messages');
    setSnackbar(true);
  }

  // useEffect(() => {
  //   showOnly();
  // }, [messages]);

  function showOnly() {
    let newValues = messages.filter((message) => message.level === sortValue);
    setMessages(newValues);
  }

  function setSort(level) {
    console.log('level');
  }

  return (
    <div>
      <EditModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        clearAll={clearAll}
      />
      <Snackbar
        snackbar={snackbar}
        setSnackbar={setSnackbar}
        snackbarMsg={snackbarMsg}
      />
      <Header
        messages={messages}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        clearAll={clearAll}
        setSortValue={setSortValue}
      />
      <Message
        messages={messages}
        setId={setId}
        setIsRunning={setIsRunning}
        setOpenEditModal={setOpenEditModal}
        setMessages={setMessages}
        setSnackbar={setSnackbar}
        setSnackbarMsg={setSnackbarMsg}
      />
    </div>
  );
}

export default App;
