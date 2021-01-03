import React from 'react';
import style from './Message.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';
import { getAvatar, getReadableTime, getChipClass } from '../helpers/helpers';

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
