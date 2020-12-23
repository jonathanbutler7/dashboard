import React from 'react';
import style from './EditMessage.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';

function EditMessage({ msg }) {
  function pickAvatarColor(level) {
    if (level === 'error') return 'secondary';
    if (level === 'warn') return 'primary';
    if (level === 'status') return 'default';
  }
  let { timestamp, level, id, message, confirm } = msg;
  let avatar = level.charAt(0).toUpperCase();

  return (
    <>
      <div className={style.editMessage} id={id}>
        <h3>Edit message:</h3>
        <p>
          <small>{timestamp}</small>
        </p>
        <Chip
          color={pickAvatarColor(level)}
          label={level}
          avatar={<Avatar>{avatar}</Avatar>}
        />
        <h4>{message}</h4>
        <MessageButtons confirm={confirm} id={id} editMode={true} />
      </div>
    </>
  );
}

export default EditMessage;
