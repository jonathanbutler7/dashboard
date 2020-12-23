import React, { useState } from 'react';
import Dialogue from './Dialogue';
import style from './Message.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDashboard } from '../context';

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
  const [dialogueOpen, setDialogueOpen] = useState(false);
  function editPost(id) {
    setIsRunning(false);
    setOpenEditModal(true);
    setId(id);
  }

  // function openDialogue() {
  //   setDialogueOpen(true);
  //   setIsRunning(false);
  // }
  function closeDialogue(id) {
    setDialogueOpen(false);
    setIsRunning(true);
    const newMsgs = messages.map((msg) =>
      id === msg.id
        ? {
            ...msg,
            confirm: false,
          }
        : msg
    );

    setMessages(newMsgs);
  }

  function deleteMessage(id) {
    const newMsgs = messages.filter((msg) => msg.id !== id);
    setMessages(newMsgs);
    setSnackbarMsg('Successfully deleted');
    setSnackbar(true);
  }

  function openConfirm(id) {
    const newMsgs = messages.map((msg) =>
      id === msg.id
        ? {
            ...msg,
            confirm: true,
          }
        : msg
    );

    setMessages(newMsgs);
  }

  function pickAvatarColor(level) {
    if (level === 'error') return 'secondary';
    if (level === 'warn') return 'primary';
    if (level === 'status') return 'default';
  }

  return (
    < >
      {messages.map((msg, key) => {
        let { timestamp, level, id, message, confirm } = msg;
        let avatar = level.charAt(0).toUpperCase();
        return (
          <div key={key} className={style.message} id={id}>
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
              {confirm && (
                <Dialogue
                  open={dialogueOpen}
                  closeDialogue={closeDialogue}
                  id={id}
                  deleteMessage={deleteMessage}
                />
              )}

              <Button
                onClick={(e) => editPost(id)}
                variant='contained'
                color='primary'
                style={{ marginRight: '1rem' }}
              >
                Edit
              </Button>
              <Button
                // onClick={(e) => deleteMessage(id)}
                onClick={(e) => openConfirm(id)}
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
