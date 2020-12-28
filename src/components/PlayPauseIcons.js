import React from 'react';
import { FaPlay, FaPauseCircle } from 'react-icons/fa';
import { useDashboard } from '../context';
import style from './PlayPauseIcons.module.scss';

function PlayPauseIcons() {
  const { setIsRunning, isRunning } = useDashboard();
  return (
    <div className={style.icon}>
      {isRunning ? (
        <FaPlay
          className={style.playIcon}
          onClick={() => setIsRunning(!isRunning)}
        />
      ) : (
        <FaPauseCircle
          className={style.pauseIcon}
          onClick={() => setIsRunning(!isRunning)}
        />
      )}
    </div>
  );
}

export default PlayPauseIcons;
