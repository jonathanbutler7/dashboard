import React, { useState } from 'react';
import Dialogue from './Dialogue';
import style from './Message.module.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDashboard } from '../context';

function MessageButtons({ id, confirm }) {
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const {
    messages,
    setIsRunning,
    setMessages,
    setSnackbar,
    setSnackbarMsg,
    setId,
  } = useDashboard();

  function deleteMessage(id) {
    const newMsgs = messages.filter((msg) => msg.id !== id);
    setMessages(newMsgs);
    setSnackbarMsg('Successfully deleted');
    setSnackbar(true);
  }

  function editPost(id) {
    setIsRunning(false);
    setId(id);
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
  return (
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
        onClick={(e) => openConfirm(id)}
        variant='contained'
        color='secondary'
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
}

export default MessageButtons;
