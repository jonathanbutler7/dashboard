import React from 'react';
import Message from './Message';
import style from './Messages.module.scss';

function Messages() {
  return (
    <div className={style.main}>
      <Message />
    </div>
  );
}

export default Messages;
