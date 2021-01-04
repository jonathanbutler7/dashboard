import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import style from './Dialogue.module.scss';
import { useDashboard } from '../context';

function Dialogue({ id, inMenu, setShowDeleteConfirmation }) {
  const { setSnackbar, setIsRunning, isRunning, dispatch } = useDashboard();
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    if (inMenu) {
      let msg = 'Are you sure you want to delete all? This cannot be undone.';
      setDeleteMessage(msg);
    }
    if (!inMenu) {
      let msg = 'Are you sure you want to delete this message?';
      setDeleteMessage(msg);
    }
  }, [inMenu]);

  function closeDialogue(id) {
    if (inMenu) {
      setShowDeleteConfirmation(false);
    }
    if (!inMenu) {
      dispatch({ type: 'toggle-delete-confirmation', payload: id });
      setIsRunning(!isRunning);
    }
  }

  function deleteSelected(id = null) {
    dispatch({ type: 'delete', payload: id });
    if (inMenu) {
      setSnackbar('Successfully deleted all');
      setShowDeleteConfirmation(false);
    }
    if (!inMenu) {
      setSnackbar('Successfully deleted message');
      setIsRunning(true);
    }
  }

  return (
    <div className={inMenu ? style.inMenu : style.main}>
      <h5 id='confirmation-dialog-title'>{deleteMessage}</h5>
      <div>
        <Button
          autoFocus
          onClick={() => closeDialogue(id)}
          variant='contained'
          style={{ marginRight: '1rem' }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => deleteSelected(id)}
          color='primary'
          variant='contained'
          style={{ background: '#AA647B' }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Dialogue;
