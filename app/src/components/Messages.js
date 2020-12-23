import React, { useEffect } from 'react';
import Message from './Message';
import style from './Messages.module.scss';
import EditMessage from './EditMessage';
import { useDashboard } from '../context';
function Messages() {
  const { messages, select, chosenMessages } = useDashboard();
  // useEffect(() => {
  //   if (select) {
  //     chosenMessages = messages.filter((message) => message.level === select);
  //     console.log(chosenMessages);
  //   }
  // }, [select]);
  return (
    <div className={style.main}>
      {chosenMessages.map((msg, key) => (
        <div key={key}>
          {msg.edit ? <EditMessage msg={msg} /> : <Message msg={msg} />}
        </div>
      ))}
    </div>
  );
}

export default Messages;
