import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import style from './Dialogue.module.scss';
import { useDashboard } from '../../context';

function Dialogue({ id, inMenu, setShowDelete }) {
  const { state, dispatch } = useDashboard();
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    if (inMenu) {
      setDeleteMessage(
        'Are you sure you want to delete all? This cannot be undone.'
      );
    }
    if (!inMenu) {
      setDeleteMessage('Are you sure you want to delete this message?');
    }
  }, [inMenu]);

  function closeDialogue() {
    if (inMenu) {
      setShowDelete(false);
    }
    if (!inMenu) {
      setShowDelete(false);
      dispatch({ type: 'is-running', payload: !state.isRunning });
    }
  }

  function deleteSelected() {
    if (inMenu) {
      deleteAllAndSetSnackbar();
    }
    if (!inMenu) {
      deleteOneAndSetSnackbar();
    }
  }

  function deleteAllAndSetSnackbar() {
    setShowDelete(false);
    dispatch({ type: 'delete-all' });
    dispatch({ type: 'set-snackbar', payload: 'Successfully deleted all' });
  }

  function deleteOneAndSetSnackbar() {
    setShowDelete(false);
    dispatch({ type: 'delete-one', payload: id });
    dispatch({ type: 'set-snackbar', payload: 'Successfully deleted message' });
    dispatch({ type: 'is-running', payload: !state.isRunning });
  }

  return (
    <div className={inMenu ? style.inMenu : style.main}>
      <h5 id='confirmation-dialog-title'>{deleteMessage}</h5>
      <div>
        <Button
          autoFocus
          onClick={() => closeDialogue()}
          variant='contained'
          style={{ marginRight: '1rem' }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => deleteSelected()}
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
