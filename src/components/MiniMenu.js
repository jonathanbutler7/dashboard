import React, { useState } from 'react';
import style from './MiniMenu.module.scss';
import Button from '@material-ui/core/Button';
import PlayPauseIcons from './PlayPauseIcons';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import { useDashboard } from '../context';
import Dialogue from './Dialogue';
import Chart from './Chart';

function MiniMenu({ plural }) {
  const { isRunning, state, select, msgsInView } = useDashboard();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  return (
    <div
      className={style.main}
      style={{
        borderBottom: isRunning ? '2px solid #4caf50' : '2px solid #ff9800',
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
          <h2>💬</h2>
        </div>
        <p>Filter:</p>
        <Select />
        <Button
          onClick={(e) => setShowDeleteConfirmation(true)}
          variant='contained'
          style={{ background: '#AA647B', height: '40px', paddingLeft: '1rem' }}
        >
          <DeleteIcon />
        </Button>
      </div>
      <div className={style.right}>
        <PlayPauseIcons />
        <p>
          {msgsInView.length} {select !== 'view all' && `of ${state.length}`}{' '}
          {plural}
        </p>
        <Chart mini={true} />
      </div>
    </div>
  );
}

export default MiniMenu;
