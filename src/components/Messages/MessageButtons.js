import React, { useCallback } from 'react';
import Dialogue from '../Popups/Dialogue';
import style from './Message.module.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDashboard } from '../../context';

function MessageButtons({
  id,
  showDelete,
  setShowDelete,
  whichOne,
  setWhichOne,
  editMode,
  setNewMsg,
}) {
  const { state, dispatch } = useDashboard();

  function firstButtonClicked() {
    if (!editMode) {
      dispatch({ type: 'is-running', payload: !state.isRunning });
      setShowDelete(true);
    }
    if (editMode) {
      setNewMsg();
      setWhichOne(!whichOne);
      dispatch({
        type: 'set-snackbar',
        payload: 'Successfully edited message',
      });
      dispatch({ type: 'is-running', payload: !state.isRunning });
    }
  }

  const secondButtonClicked = useCallback(() => {
    dispatch({ type: 'is-running', payload: !state.isRunning });
    setWhichOne(!whichOne);
  }, [dispatch, setWhichOne, state.isRunning, whichOne]);

  return (
    <div className={style.buttons}>
      {showDelete && (
        <Dialogue
          showDelete={showDelete}
          setShowDelete={setShowDelete}
          id={id}
        />
      )}
      <Button
        onClick={() => firstButtonClicked()}
        variant='contained'
        color={editMode ? 'primary' : 'secondary'}
        startIcon={!editMode && <DeleteIcon />}
        style={{ marginRight: '1rem' }}
      >
        {editMode ? 'Accept' : 'Delete'}
      </Button>
      {/* <Button
        onClick={() => secondButtonClicked()}
        variant='contained'
        color={editMode ? 'default' : 'primary'}
      >
        {editMode ? 'Cancel' : 'Edit'}
      </Button> */}
      <button
        onClick={() => secondButtonClicked()}
      >
        {editMode ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
}

export default MessageButtons;
