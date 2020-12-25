import React, { useEffect } from 'react';
import Message from './Message';
import style from './Messages.module.scss';
import EditMessage from './EditMessage';
import { useDashboard } from '../context';

function Messages() {
  const {
    state,
    dispatch,
    messages,
    select,
    filteredMessages,
  } = useDashboard();
  let pickem = state;

  useEffect(() => {
    if (messages.length > 0) {
      dispatch({
        type: 'add-new-message',
        payload: messages[messages.length - 1],
      });
    }
  }, [messages, dispatch]);

  if (select !== 'view all') {
    pickem = messages.filter((message) => message.level === select);
  }
  if (select === 'view all') {
    pickem = messages;
  }

  console.log(messages)
  return (
    <div className={style.main}>
      {pickem.map((msg, key) => (
        <div key={key}>
          {msg.edit ? <EditMessage msg={msg} /> : <Message msg={msg} />}
        </div>
      ))}
    </div>
  );
}

export default Messages;
