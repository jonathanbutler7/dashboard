import React from 'react';
import style from './EditMessage.module.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDashboard } from '../context';

function EditMessage({ message }) {
  const { setOpenEditModal } = useDashboard();
  let { timestamp, level, id, msg } = message[0];

  return (
    <div className={style.main}>
     
    </div>
  );
}

export default EditMessage;
