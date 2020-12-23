import React, { useState, useEffect } from 'react';
import { levels } from './store/levels';
import style from './Header.module.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function Header({ setIsRunning, isRunning, messages, clearAll, setSortValue }) {
  const [plural, setPlural] = useState('messages');
  const [msgType, setMsgType] = useState('');

  function handleChange(e) {
    setMsgType(e.target.value);
    setSortValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(msgType);
  }

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
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} value={msgType}>
          {levels.map((level, key) => (
            <option>{level}</option>
          ))}
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Header;
