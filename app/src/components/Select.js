import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDashboard } from '../context';
import { useStyles } from '../helpers/helpers';

function SelectMenu({ inEditView, id }) {
  const { setSelect, select, messages, setMessages } = useDashboard();
  let options;
  const levelsAll = ['view all', 'warn', 'error', 'status'];
  const levels = ['warn', 'error', 'status'];
  const classes = useStyles();

  if (inEditView) {
    options = levels;
  }
  if (!inEditView) {
    options = levelsAll;
  }

  const handleChange = (event) => {
    if (!inEditView) {
      setSelect(event.target.value);
    }
    if (inEditView) {
      setSelect(event.target.value);
      changeLevel(event.target.value);
    }
  };

  function changeLevel(level) {
    const newMsgs = messages.map((msg) =>
      id === msg.id
        ? {
            ...msg,
            level: level,
          }
        : msg
    );
    setMessages(newMsgs);
  }

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel
        id='demo-simple-select-outlined-label'
        style={{ color: '#E0E0E0' }}
      >
        Levels
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        value={select}
        onChange={handleChange}
        label='Levels'
        style={{ color: '#E0E0E0' }}
      >
        {options.map((level, key) => (
          <MenuItem key={key} value={level}>
            {level}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectMenu;
