import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import style from './Message.module.scss';
import { useDashboard } from './context';

function Message() {
  const {
    messages,
    setIsRunning,
    setOpenEditModal,
    setMessages,
    setSnackbar,
    setSnackbarMsg,
    setId,
  } = useDashboard();
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
            <h4>{message}</h4>
            <div className={style.buttons}>
              <Button
                onClick={(e) => editPost(msg)}
                variant='contained'
                color='primary'
                style={{ marginRight: '1rem' }}
              >
                Edit
              </Button>
              <Button
                onClick={(e) => deleteMessage(id)}
                variant='contained'
                color='secondary'
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Message;
