import { useState } from 'react';
import { useInterval } from './useInterval';
import { randomGenerator } from './store/generator';
import EditModal from './EditModal';

function App() {
  const [messages, setMessages] = useState([]);
  const [isRunning, setIsRunning] = useState(true);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [id, setId] = useState(null);

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
  }

  function deleteMessage(id) {
    const newMsgs = messages.filter((msg) => msg.id !== id);
    setMessages(newMsgs);
  }
  
  return (
    <div className='App'>
      <EditModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />
      <header className='App-header'>
        <button onClick={(e) => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={(e) => clearAll()}>Clear all messages</button>
        <h1>{isRunning ? 'Running' : 'Paused'}</h1>
        {messages.map((msg, key) => (
          <div key={key} style={{ border: '1px solid red' }}>
            <p>
              <small>{msg.timestamp}</small>
            </p>
            <h5>{msg.level}</h5>
            <p>{msg.message}</p>
            <button onClick={(e) => editPost(msg)}>Edit</button>
            <button onClick={(e) => deleteMessage(msg.id)}>Delete</button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
