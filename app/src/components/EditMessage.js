import React from 'react';
import style from './EditMessage.module.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDashboard } from '../context';
function EditMessage({ message }) {
  const { setOpenEditModal } = useDashboard();
  let { timestamp, level, id, msg } = message[0];

  return (
    <div className={style.main}>
      <div className={style.title}>
        <h1>Edit message details:</h1>
        <AiOutlineCloseCircle onClick={() => setOpenEditModal(false)} />
      </div>
      <p>{timestamp}</p>
      <p>{level}</p>
      <p>{id}</p>
      <p>{msg}</p>
    </div>
  );
}

export default EditMessage;
