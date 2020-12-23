import React, { useState, useEffect } from 'react';
import { levels } from './store/levels';
import style from './Header.module.scss';

function Header({ setIsRunning, isRunning, messages, clearAll }) {
  const [plural, setPlural] = useState('messages');

  useEffect(() => {
    if (messages.length === 1) {
      setPlural('message');
    }
    if (messages.length !== 1) {
      setPlural('messages');
    }
  }, [messages]);
  return (
    <div className={style.main}>
      <h1>{isRunning ? 'Running' : 'Paused'}</h1>
      
      <p>
        Displaying {messages.length} {plural}
      </p>
      <button onClick={(e) => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={(e) => clearAll()}>Clear all messages</button>
      <br />
      <p>Sort by</p>
      <select name='' id=''>
        <option value='select'>Please select one</option>
        {levels.map((level, key) => (
          <option>{level}</option>
        ))}
      </select>
    </div>
  );
}

export default Header;
