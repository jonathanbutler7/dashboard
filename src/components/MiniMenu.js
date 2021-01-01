import React, { useState } from 'react';
import style from './MiniMenu.module.scss';
import Button from '@material-ui/core/Button';
import PlayPauseIcons from './PlayPauseIcons';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import { useDashboard } from '../context';
import Dialogue from './Dialogue';
import Chart from './Chart';

function MiniMenu({ toggleIsRunning, plural }) {
  const { isRunning, state, select, msgsInView } = useDashboard();

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
          <h1>💬</h1>
          <h2>Status: </h2>
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
        <p>
          Displaying {msgsInView.length}{' '}
          {select !== 'view all' && `of ${state.length} total`} {plural}
        </p>
        <Chart mini={true} />
      </div>
    </div>
  );
}

export default MiniMenu;
