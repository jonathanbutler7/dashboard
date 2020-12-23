import React from 'react';
import Message from './Message';
import style from './Messages.module.scss';
import EditMessage from './EditMessage';
import { useDashboard } from '../context';
function Messages() {
  const { messages } = useDashboard();

  return (
    <div className={style.main}>
      {messages.map((msg, key) => (
        <>{msg.edit ? <EditMessage msg={msg} /> : <Message msg={msg} />}</>
      ))}
    </div>
  );
}

export default Messages;
