import React, { useState } from 'react';
import style from './EditMessage.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';
import { useDashboard } from '../context';

function EditMessage({ msg }) {
  const { messages, setMessages } = useDashboard();
  let { timestamp, level, id, message, confirm } = msg;
  const [text, setText] = useState(message);
  function pickAvatarColor(level) {
    if (level === 'error') return 'secondary';
    if (level === 'warn') return 'primary';
    if (level === 'status') return 'default';
  }
  let avatar = level.charAt(0).toUpperCase();

  function changeHandler(e, type) {
    switch (type) {
      case 'text':
        setText(e.target.value);
        break;
      default:
        break;
    }
  }

  function setNewMsg() {
    const newMsgs = messages.map((msg) =>
      id === msg.id
        ? {
            ...msg,
            message: text,
          }
        : msg
    );
    setMessages(newMsgs);
    closeEditWindow(newMsgs);
  }

  function closeEditWindow() {
    const newMsgs = messages.map((msg) =>
      id === msg.id
        ? {
            ...msg,
            edit: false,
          }
        : msg
    );
    setMessages(newMsgs);
  }

  return (
    <>
      <div className={style.editMessage} id={id}>
        <h3>Edit message:</h3>
        <p>
          <small>{timestamp}</small>
        </p>
        <Chip
          color={pickAvatarColor(level)}
          label={level}
          avatar={<Avatar>{avatar}</Avatar>}
        />
        <br />
        <textarea
          name=''
          id=''
          cols='100'
          rows='3'
          defaultValue={text}
          onChange={(e) => changeHandler(e, 'text')}
        ></textarea>
        <MessageButtons
          confirm={confirm}
          id={id}
          editMode={true}
          setNewMsg={setNewMsg}
          closeEditWindow={closeEditWindow}
        />
      </div>
    </>
  );
}

export default EditMessage;
