import React, { useState } from 'react';
import ViewMessage from './ViewMessage';
import EditMessage from './EditMessage';

export default function MessageCard({ msg }) {
  const [whichOne, setWhichOne] = useState(msg.edit);
  const [text, setText] = useState(msg.message);
  const [level, setLevel] = useState(msg.level);

  return (
    <div>
      {!whichOne ? (
        <ViewMessage
          msg={msg}
          text={text}
          setWhichOne={setWhichOne}
          whichOne={whichOne}
        />
      ) : (
        <EditMessage
          msg={msg}
          whichOne={whichOne}
          setWhichOne={setWhichOne}
          setNewText={setText}
          setLevel={setLevel}
          level={level}
        />
      )}
    </div>
  );
}
