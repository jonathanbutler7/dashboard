import React, { useState, useEffect } from 'react';
import { useDashboard } from '../context';
import { getPlural } from '../helpers/helpers';
import FullMenu from './FullMenu';
import MiniMenu from './MiniMenu';
import style from './Header.module.scss';
import ToTop from './ToTop';

function Header() {
  const {
    setIsRunning,
    isRunning,
    state,
    setSnackbar,
    msgsInView,
  } = useDashboard();
  const [plural, setPlural] = useState('messages');
  const [offset, setOffset] = useState(0);
  let totalHeight;
  if (msgsInView.length > 3) {
    totalHeight = document.getElementById('messages').clientHeight;
  }

  useEffect(() => {
    setPlural(getPlural(state));
    if (totalHeight > 490) {
      window.onscroll = () => {
        setOffset(window.pageYOffset);
      };
    }
  }, [state, totalHeight]);

  function toggleIsRunning() {
    setIsRunning(!isRunning);
    let message = isRunning ? 'Paused' : 'Started';
    setSnackbar(message);
  }

  return (
    <div>
      {offset < 1 || msgsInView.length <= 3 ? (
        <>
          <div className={style.main}>
            <h1>Messages Dashboard 💬</h1>
          </div>
          <FullMenu
            toggleIsRunning={toggleIsRunning}
            plural={plural}
            id='top'
          />
        </>
      ) : (
        <>
          <MiniMenu toggleIsRunning={toggleIsRunning} plural={plural} />
          <ToTop />
        </>
      )}
    </div>
  );
}

export default Header;
