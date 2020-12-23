import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import style from './Message.module.scss'
function Message({
  messages,
  setIsRunning,
  setOpenEditModal,
  setId,
  setMessages,
  setSnackbar,
  setSnackbarMsg,
  clearAll
}) {
  function editPost(id) {
    setIsRunning(false);
    setOpenEditModal(true);
    setId(id);
  }

  function deleteMessage(id) {
    const newMsgs = messages.filter((msg) => msg.id !== id);
    setMessages(newMsgs);
    setSnackbarMsg('Successfully deleted');
    setSnackbar(true);
  }

  function pickAvatarColor(level) {
    if (level === 'error') return 'secondary';
    if (level === 'warn') return 'primary';
    if (level === 'status') return 'default';
  }
  return (
    <>
      {messages.map((msg, key) => {
        let { timestamp, level, id, message } = msg;
        let avatar = level.charAt(0).toUpperCase();
        return (
          <div key={key} className={style.main}>
            <p>
              <small>{timestamp}</small>
            </p>
            <Chip
              color={pickAvatarColor(level)}
              label={level}
              avatar={<Avatar>{avatar}</Avatar>}
            />
            <p>{message}</p>
            <button onClick={(e) => editPost(msg)}>Edit</button>
            <button onClick={(e) => deleteMessage(id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Message;
