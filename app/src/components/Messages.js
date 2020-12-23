import React from 'react';
import Message from './Message';
import style from './Messages.module.scss';
import EditMessage from './EditMessage';
import { useDashboard } from '../context';

function Messages() {
  const { filteredMessages } = useDashboard();
  return (
    <div className={style.main}>
      {filteredMessages.map((msg, key) => (
        <div key={key}>
          {msg.edit ? <EditMessage msg={msg} /> : <Message msg={msg} />}
        </div>
      ))}
    </div>
  );
}

export default Messages;
