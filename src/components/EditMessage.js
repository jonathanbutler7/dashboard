import React, { useState } from 'react';
import style from './EditMessage.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';
import Select from './Select';
import { getAvatar, getReadableTime } from '../helpers/helpers';
import { useDashboard } from '../context';
import { customChip } from '../helpers/useStyles';
import { withStyles } from '@material-ui/core/styles';

function EditMessage({ msg }) {
  let { timestamp, level, id, message, confirm } = msg;
  const [text, setText] = useState(message);
  const { setIsRunning, dispatch } = useDashboard();
  const StyleChip = withStyles(customChip(level))(Chip);

  function submit() {
    setNewMsg();
  }

  function changeText(val) {
    setText(val);
    dispatch({ type: 'change-text', payload: { id: id, text: val } });
  }

  function setNewMsg() {
    dispatch({ type: 'toggle-edit', payload: id });
    setIsRunning(true);
  }

  return (
    <form className={style.editMessage} id={id} onSubmit={submit}>
      <h3>Edit details:</h3>
      <p>
        <small>Created: {getReadableTime(timestamp)}</small>
      </p>
      <StyleChip label={level} avatar={<Avatar>{getAvatar(level)}</Avatar>} />
      <br />
      <h4>Edit level:</h4>
      <Select inEditView={true} id={id} prevLevel={level} />
      <br />
      <h4>Edit message:</h4>
      <br />
      <textarea
        name=''
        id=''
        cols='100'
        rows='3'
        defaultValue={text}
        onChange={(e) => changeText(e.target.value)}
      ></textarea>
      <MessageButtons
        confirm={confirm}
        id={id}
        editMode={true}
        setNewMsg={setNewMsg}
      />
    </form>
  );
}

export default EditMessage;
