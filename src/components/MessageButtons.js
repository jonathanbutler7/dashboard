import React from 'react';
import Dialogue from './Dialogue';
import style from './Message.module.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDashboard } from '../context';

function MessageButtons({ id, confirm, editMode, setNewMsg }) {
  const { setIsRunning, isRunning, dispatch, setSnackbar } = useDashboard();

  function firstButtonClicked(id) {
    dispatch({ type: 'toggle-edit', payload: id });
    if (!editMode) {
      setIsRunning(false);
    }
    if (editMode) {
      setIsRunning(true);
    }
  }

  function secondButtonClicked(id) {
    if (!editMode) {
      setIsRunning(!isRunning);
      dispatch({ type: 'toggle-delete-confirmation', payload: id });
    }
    if (editMode) {
      setNewMsg();
      setSnackbar('Successfully edited message');
    }
  }

  return (
    <div className={style.buttons}>
      {confirm && <Dialogue id={id} />}
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