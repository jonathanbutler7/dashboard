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
    <div
      className={style.main}
      style={{
        borderBottom: isRunning ? '1px solid #4caf50' : '1px solid #ff9800',
      }}
    >
      <div className={style.left}>
        {showDeleteConfirmation && (
          <Dialogue
            inMenu={true}
            setShowDeleteConfirmation={setShowDeleteConfirmation}
          />
        )}
        <div className={style.status}>
          <h2>💬 </h2>
          <PlayPauseIcons />
        </div>
        <Button
          onClick={(e) => toggleIsRunning()}
          variant='contained'
          style={{ margin: '0 1rem', height: '40px' }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button
          onClick={(e) => setShowDeleteConfirmation(true)}
          variant='contained'
          startIcon={<DeleteIcon />}
          style={{ background: '#AA647B', height: '40px' }}
        >
          Delete all
        </Button>
        <p>Filter:</p>
        <Select />
      </div>
      <div className={style.right}>
        <p>
          {msgsInView.length}{' '}
          {select !== 'view all' && `of ${state.length}`} {plural}
        </p>
        <Chart mini={true} />
      </div>
    </div>
  );
}

export default MiniMenu;
