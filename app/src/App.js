import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { useInterval } from './useInterval';
import { randomGenerator } from './generator';

function App() {
  const [messages, setMessages] = useState([]);

  // setInterval(() => {
  //   const newMsg = randomGenerator();
  //   setMessages(newMsg);
  // }, 2000);
  // console.log(messages);

  useInterval(() => {
    const newMsg = randomGenerator();
    const newSet = [...messages, newMsg];
    setMessages(newSet);
  }, 2000);
  console.log(messages);
  return (
    <div className='App'>
      <header className='App-header'>
        {messages.map((msg) => (
          <div style={{border: '1px solid red'}}>
            <p><small>{msg.timestamp}</small></p>
            <h5>{msg.level}</h5>
            <p>{msg.message}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
