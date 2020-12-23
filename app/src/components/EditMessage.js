import React from 'react';
import style from './EditMessage.module.scss';
function EditMessage({ message }) {
  let { timestamp, level, id, msg } = message[0];
  return (
    <div className={style.main}>
      <p>{timestamp}</p>
      <p>{level}</p>
      <p>{id}</p>
      <p>{msg}</p>
    </div>
  );
}

export default EditMessage;
