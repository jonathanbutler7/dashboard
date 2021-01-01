import React, { useState, useEffect } from 'react';
import { useDashboard } from '../context';
import FullMenu from './FullMenu';
import MiniMenu from './MiniMenu';

function Menu() {
  const { setIsRunning, isRunning, state, setSnackbar } = useDashboard();
  const [plural, setPlural] = useState('messages');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      // setOffset(window.pageYOffset);
      
    };
  }, []);

  console.log(offset);

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
    <>
      {offset < 1 ? (
        <FullMenu toggleIsRunning={toggleIsRunning} plural={plural} />
      ) : (
        <MiniMenu toggleIsRunning={toggleIsRunning} plural={plural} />
      )}
    </>
  );
}

export default Menu;
