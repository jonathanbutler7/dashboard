import React from 'react';
import { FaPlay, FaPauseCircle } from 'react-icons/fa';

function PlayPauseIcons({ isRunning }) {
  return (
    <>
      {isRunning ? (
        <FaPlay style={{ height: '2rem', width: '2rem' }} />
      ) : (
        <FaPauseCircle style={{ height: '2rem', width: '2rem' }} />
      )}
    </>
  );
}

export default PlayPauseIcons;
