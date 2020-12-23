import React, { useState, useEffect } from 'react';
import style from './Menu.module.scss';
import Button from '@material-ui/core/Button';
import PlayPauseIcons from './PlayPauseIcons';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import { useDashboard } from '../context';
import Chart from './Chart';

function Menu() {
  const {
    messages,
    setIsRunning,
    isRunning,
    clearAll,
    filteredMessages,
  } = useDashboard();
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
      <h3>Status: {isRunning ? 'Running' : 'Paused'}</h3>
      <PlayPauseIcons isRunning={isRunning} />
      <Chart />
      <p>
        Displaying {filteredMessages.length} {plural}
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

export default Menu;
