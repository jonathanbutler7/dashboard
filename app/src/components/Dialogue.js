import React from 'react';
import Button from '@material-ui/core/Button';
import style from './Dialogue.module.scss';

function Dialogue({ open, closeDialogue, id, deleteMessage }) {
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
