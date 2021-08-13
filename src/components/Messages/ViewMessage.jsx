import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import style from './Message.module.scss';
import MessageButtons from './MessageButtons';
import {
  getAvatar,
  getReadableTime,
  getChipBackground,
  getChipColor,
} from '../../helpers/helpers';

const useStyles = makeStyles({
  chipStyle(msg) {
    return {
      backgroundColor: getChipBackground(msg.level),
      color: getChipColor(msg.level),
    };
  },
});

function ViewMessage({ msg, text, setEditOrView, editOrView }) {
  const [showDelete, setShowDelete] = useState(false);
  const classes = useStyles(msg);

  return (
    <div className={style.message} id={msg.id}>
      <p>{getReadableTime(msg.timestamp)}</p>
      <Chip
        className={classes.chipStyle}
        label={msg.level}
        avatar={<Avatar>{getAvatar(msg.level)}</Avatar>}
      />
      <h4>{text}</h4>
      <MessageButtons
        id={msg.id}
        showDelete={showDelete}
        setShowDelete={setShowDelete}
        setEditOrView={setEditOrView}
        editOrView={editOrView}
      />
    </div>
  );
}

export default ViewMessage;
