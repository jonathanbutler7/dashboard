import React, { useState, useEffect } from 'react';
import style from './Header.module.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import { useDashboard } from '../context';

function Header() {
  const { messages, setIsRunning, isRunning, clearAll } = useDashboard();
  const [plural, setPlural] = useState('messages');

  useEffect(() => {
    if (messages.length === 1) {
      setPlural('message');
    }
    if (messages.length !== 1) {
      setPlural('messages');
    }
  }, [messages]);

  return (
    <div className={style.main}>
      <h1>Messages Dashboard</h1>
      <h3>Status: {isRunning ? 'Running' : 'Paused'}</h3>
      <p>
        Displaying {messages.length} {plural}
      </p>
      <Button
        onClick={(e) => setIsRunning(!isRunning)}
        variant='contained'
        style={{ marginRight: '1rem' }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button
        onClick={(e) => clearAll()}
        variant='contained'
        startIcon={<DeleteIcon />}
        style={{ background: '#AA647B' }}
      >
        Delete all messages
      </Button>
      <br />
      <p>Show only:</p>
      <Select />
    </div>
  );
}

export default Header;
