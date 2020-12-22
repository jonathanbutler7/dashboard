import { useState, useEffect } from 'react';
import { useInterval } from './useInterval';
import { randomGenerator } from './store/generator';
import { levels } from './store/levels';
import Message from './Message';
import EditModal from './EditModal';
import Snackbar from './Snackbar';

function App() {
  const [messages, setMessages] = useState([]);
  const [isRunning, setIsRunning] = useState(true);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [id, setId] = useState(null);
  const [plural, setPlural] = useState('messages');
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  useEffect(() => {
    if (messages.length === 1) {
      setPlural('message');
    }
    if (messages.length !== 1) {
      setPlural('messages');
    }
  }, [messages]);

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

  function setSort(level) {
    console.log('level');
  }

  return (
    <div className='App'>
      <EditModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />
      <Snackbar
        snackbar={snackbar}
        setSnackbar={setSnackbar}
        snackbarMsg={snackbarMsg}
      />
      
        <button onClick={(e) => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={(e) => clearAll()}>Clear all messages</button>
        <h1>{isRunning ? 'Running' : 'Paused'}</h1>
        <p>
          Displaying {messages.length} {plural}
        </p>
        Sort by:
        <select name='' id=''>
          <option value='select'>Please select one</option>
          {levels.map((level, key) => (
            <option onClick={(e) => setSort(level)} value={level} key={key}>
              {level}
            </option>
          ))}
        </select>
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
