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
    msgsInView,
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
      <div className={style.left}>
        {showDeleteConfirmation && (
          <Dialogue
            inMenu={true}
            setShowDeleteConfirmation={setShowDeleteConfirmation}
          />
        )}
        <div className={style.status}>
          <h2>Status: {isRunning ? 'Running' : 'Paused'}</h2>
          <PlayPauseIcons />
        </div>
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
      <div className={style.right}>
        <Chart />
        <p>
          Displaying {msgsInView.length}{' '}
          {select !== 'view all' && `of ${state.length} total`} {plural}
        </p>
      </div>
    </div>
  );
}

export default Menu;
