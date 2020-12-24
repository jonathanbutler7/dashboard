import React from 'react';
import style from './Message.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';
import { pickAvatarColor, getAvatar } from '../helpers/helpers';

function Message({ msg }) {
  let { timestamp, level, id, message, confirm } = msg;

  return (
    <div className={style.message} id={id}>
      <p>
        <small>{timestamp}</small>
      </p>
      <Chip
        color={pickAvatarColor(level)}
        label={level}
        avatar={<Avatar>{getAvatar(level)}</Avatar>}
      />
      <h4>{message}</h4>
      <MessageButtons confirm={confirm} id={id} />
    </div>
  );
}

export default Message;
