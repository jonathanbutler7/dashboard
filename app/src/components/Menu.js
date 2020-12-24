import React, { useState, useEffect } from 'react';
import style from './Menu.module.scss';
import Button from '@material-ui/core/Button';
import PlayPauseIcons from './PlayPauseIcons';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import { useDashboard } from '../context';
import Chart from './Chart';

function Menu() {
  const { setIsRunning, isRunning, state, dispatch } = useDashboard();
  const [plural, setPlural] = useState('messages');

  useEffect(() => {
    if (state.length === 1) {
      setPlural('message');
    }
    if (state.length !== 1) {
      setPlural('messages');
    }
  }, [state]);

  function deleteAll() {
    dispatch({ type: 'delete-all' });
  }

  return (
    <div className={style.main}>
      <div className={style.status}>
        <h3>Status: {isRunning ? 'Running' : 'Paused'}</h3>
        <PlayPauseIcons />
      </div>
      <Chart />
      <p>
        Displaying {state.length} {plural}
      </p>
      <Button
        onClick={(e) => setIsRunning(!isRunning)}
        variant='contained'
        style={{ marginRight: '1rem' }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button
        onClick={(e) => deleteAll()}
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
