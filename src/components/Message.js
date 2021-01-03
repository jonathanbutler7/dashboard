import React from 'react';
import style from './Message.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';
import { getAvatar, getReadableTime, getChipClass } from '../helpers/helpers';
import { useStyles } from '../helpers/styles';

function Message({ msg }) {
  let { timestamp, level, id, message, confirm } = msg;
  const classes = useStyles();
  
  return (
    <div className={style.message} id={id}>
      <p>
        <small>{getReadableTime(timestamp)}</small>
      </p>
      <Chip
        className={getChipClass(level, classes)}
        label={level}
        avatar={<Avatar>{getAvatar(level)}</Avatar>}
      />
      <h4>{message}</h4>
      <MessageButtons confirm={confirm} id={id} />
    </div>
  );
}

export default Message;
