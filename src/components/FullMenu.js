import React, { useState } from 'react';
import style from './Menu.module.scss';
import Button from '@material-ui/core/Button';
import PlayPauseIcons from './PlayPauseIcons';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import { useDashboard } from '../context';
import Dialogue from './Dialogue';
import Chart from './Chart';

function FullMenu({ toggleIsRunning, plural }) {
  const {
    isRunning,
    state,
    select,
    msgsInView,
  } = useDashboard();

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
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
        <p>Filter:</p>
        <Select />
      </div>
      <div className={style.right}>
        <Chart mini={false} />
        <p>
          Displaying {msgsInView.length}{' '}
          {select !== 'view all' && `of ${state.length} total`} {plural}
        </p>
      </div>
    </div>
  );
}

export default FullMenu;
