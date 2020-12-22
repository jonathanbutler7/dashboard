import { useState, useEffect } from 'react';
import { useInterval } from './useInterval';
import { randomGenerator } from './store/generator';
import EditModal from './EditModal';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
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

  function editPost(id) {
    setIsRunning(false);
    setOpenEditModal(true);
    setId(id);
  }
  function clearAll() {
    setMessages([]);
    setSnackbarMsg('Deleted all messages');
    setSnackbar(true);
  }

  function deleteMessage(id) {
    const newMsgs = messages.filter((msg) => msg.id !== id);
    setMessages(newMsgs);
    setSnackbarMsg('Successfully deleted');
    setSnackbar(true);
  }

  function pickAvatarColor(level) {
    if (level === 'error') return 'secondary';
    if (level === 'warn') return 'primary';
    if (level === 'status') return 'default';
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
      <header className='App-header'>
        <button onClick={(e) => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={(e) => clearAll()}>Clear all messages</button>
        <h1>{isRunning ? 'Running' : 'Paused'}</h1>
        <p>
          Displaying {messages.length} {plural}
        </p>
        {messages.map((msg, key) => {
          let { timestamp, level, id, message } = msg;
          let avatar = level.charAt(0).toUpperCase();
          return (
            <div key={key} style={{ border: '1px solid red' }}>
              <p>
                <small>{timestamp}</small>
              </p>
              <Chip
                color={pickAvatarColor(level)}
                label={level}
                avatar={<Avatar>{avatar}</Avatar>}
              />
              <p>{message}</p>
              <button onClick={(e) => editPost(msg)}>Edit</button>
              <button onClick={(e) => deleteMessage(id)}>Delete</button>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
