import React, { useState } from 'react';
import style from './EditMessage.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';
import Select from './Select';
import { getChipClass, getAvatar, getReadableTime } from '../helpers/helpers';
import { useDashboard } from '../context';
// import { useStyles } from '../helpers/styles';

import { makeStyles } from '@material-ui/core/styles';
import { orange, red, green } from '@material-ui/core/colors';
export const customOrange = orange[300];
export const customGreen = green[700];
export const customRed = red[400];

const useStyles = makeStyles({
  formControl: {
    margin: 1,
    minWidth: 120,
  },
  warningChip: {
    background: customOrange,
    color: 'black',
  },
  statusChip: {
    background: customGreen,
    color: 'white',
  },
  errorChip: {
    background: customRed,
    color: 'white',
  },
  select: {
    color: 'white',
  },
});

function EditMessage({ msg }) {
  const classes = useStyles();
  let { timestamp, level, id, message, confirm } = msg;
  const [text, setText] = useState(message);
  const { setIsRunning, dispatch } = useDashboard();

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
      <Chip
        className={getChipClass(level, classes)}
        label={level}
        avatar={<Avatar>{getAvatar(level)}</Avatar>}
      />
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
