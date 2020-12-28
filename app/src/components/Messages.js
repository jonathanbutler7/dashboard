import React, { useEffect } from 'react';
import Message from './Message';
import style from './Messages.module.scss';
import EditMessage from './EditMessage';
import { useDashboard } from '../context';

function Messages() {
  const { dispatch, messages, msgsInView } = useDashboard();

  useEffect(() => {
    if (messages.length > 0) {
      dispatch({
        type: 'add-new-message',
        payload: messages[messages.length - 1],
      });
    }
  }, [messages, dispatch]);

  return (
    <div className={style.main}>
      {msgsInView.map((msg, key) => (
        <div key={key}>
          {msg.edit ? <EditMessage msg={msg} /> : <Message msg={msg} />}
        </div>
      ))}
    </div>
  );
}

export default Messages;
