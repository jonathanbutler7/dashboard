import React, { useState } from 'react';
import Dialogue from './Dialogue';
import style from './Message.module.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDashboard } from '../context';

function MessageButtons({ id, confirm, editMode, setNewMsg }) {
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const {
    messages,
    setIsRunning,
    isRunning,
    setMessages,
    dispatch,
  } = useDashboard();

  function firstButtonClicked(id) {
    dispatch({ type: 'toggle-edit', payload: id });
    setIsRunning(!isRunning);
  }

  function secondButtonClicked(id) {
    if (editMode) {
      setNewMsg();
    } else {
      setIsRunning(!isRunning);
      dispatch({ type: 'toggle-delete-confirmation', payload: id });
    }
  }

  function editPost(id) {
    setIsRunning(false);
    const newMsgs = messages.map((msg) =>
      id === msg.id
        ? {
            ...msg,
            edit: true,
          }
        : msg
    );
    setMessages(newMsgs);
  }

  function openDeleteConfirmation(id) {
    setIsRunning(false);
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
        <Dialogue open={dialogueOpen} closeDialogue={closeDialogue} id={id} />
      )}

      <Button
        onClick={(e) => firstButtonClicked(id)}
        variant='contained'
        color={editMode ? 'default' : 'primary'}
        style={{ marginRight: '1rem' }}
      >
        {editMode ? 'Cancel' : 'Edit'}
      </Button>
      <Button
        onClick={(e) => secondButtonClicked(id)}
        variant='contained'
        color={editMode ? 'primary' : 'secondary'}
        startIcon={!editMode && <DeleteIcon />}
      >
        {editMode ? 'Accept' : 'Delete'}
      </Button>
    </div>
  );
}

export default MessageButtons;
