import React from 'react';
import Button from '@material-ui/core/Button';
import style from './Dialogue.module.scss';
import { useDashboard } from '../context';

function Dialogue({ open, closeDialogue, id }) {
  const {
    messages,
    setMessages,
    setSnackbar,
    setSnackbarMsg,
    setIsRunning,
  } = useDashboard();

  function deleteMessage(id) {
    const newMsgs = messages.filter((msg) => msg.id !== id);
    setMessages(newMsgs);
    setSnackbarMsg('Successfully deleted');
    setSnackbar(true);
    setIsRunning(true);
  }

  return (
    <div className={style.main} open={open}>
      <div id='confirmation-dialog-title'>Are you sure you want to delete?</div>
      <div>
        <Button autoFocus onClick={() => closeDialogue(id)} color='primary'>
          Cancel
        </Button>
        <Button onClick={() => deleteMessage(id)} color='primary'>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Dialogue;
