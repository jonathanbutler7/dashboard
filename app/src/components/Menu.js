import React, { useState, useEffect } from 'react';
import style from './Menu.module.scss';
import Button from '@material-ui/core/Button';
import PlayPauseIcons from './PlayPauseIcons';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import Dialogue from './Dialogue';
import { useDashboard } from '../context';
import Chart from './Chart';

function Menu() {
  const {
    setIsRunning,
    isRunning,
    state,
    setSnackbar,
    select,
    pickem,
  } = useDashboard();
  const [plural, setPlural] = useState('messages');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    if (state.length === 1) {
      setPlural('message');
    }
    if (state.length !== 1) {
      setPlural('messages');
    }
  }, [state]);

  function toggleIsRunning() {
    setIsRunning(!isRunning);
    let message = isRunning ? 'Paused' : 'Started';
    setSnackbar(message);
  }

  return (
    <div className={style.main}>
      {showDeleteConfirmation && (
        <Dialogue
          inMenu={true}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
        />
      )}
      <div className={style.status}>
        <h3>Status: {isRunning ? 'Running' : 'Paused'}</h3>
        <PlayPauseIcons />
      </div>
      <Chart />
      <p>
        Displaying {pickem.length}{' '}
        {select !== 'view all' && `of ${state.length} total`} {plural}
      </p>
      <Button
        onClick={(e) => toggleIsRunning()}
        variant='contained'
        style={{ marginRight: '1rem' }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button
        onClick={(e) => setShowDeleteConfirmation(true)}
        variant='contained'
        startIcon={<DeleteIcon />}
        style={{ background: '#AA647B' }}
      >
        Delete all
      </Button>
      <br />
      <p>Show only:</p>
      <Select />
    </div>
  );
}

export default Menu;
