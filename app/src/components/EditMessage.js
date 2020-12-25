import React, { useState } from 'react';
import style from './EditMessage.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';
import Select from './Select';
import {
  pickAvatarColor,
  getAvatar,
  getReadableTime,
} from '../helpers/helpers';
import { useDashboard } from '../context';

function EditMessage({ msg }) {
  let { timestamp, level, id, message, confirm } = msg;
  const [text, setText] = useState(message);
  const { setIsRunning, dispatch } = useDashboard();

  function setNewMsg() {
    dispatch({ type: 'change-text', payload: { id: id, text: text } });
    dispatch({ type: 'toggle-edit', payload: id });
    setIsRunning(true);
  }

  return (
    <div className={style.editMessage} id={id}>
      <h3>Edit details:</h3>
      <p>
        <small>{getReadableTime(timestamp)}</small>
      </p>
      <Chip
        color={pickAvatarColor(level)}
        label={level}
        avatar={<Avatar>{getAvatar(level)}</Avatar>}
      />
      <h4>Edit level:</h4>
      <Select inEditView={true} id={id} prevLevel={level} />
      <br />
      <h5>Edit message:</h5>
      <textarea
        name=''
        id=''
        cols='100'
        rows='3'
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <MessageButtons
        confirm={confirm}
        id={id}
        editMode={true}
        setNewMsg={setNewMsg}
      />
    </div>
  );
}

export default EditMessage;
