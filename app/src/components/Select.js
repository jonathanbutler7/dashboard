import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { useDashboard } from '../context';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectMenu({ inEditView, id }) {
  const { setSelect, select, messages, setMessages } = useDashboard();
  const classes = useStyles();

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
  const levels = ['view all', 'warn', 'error', 'status'];
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
        {levels.map((level, key) => (
          <MenuItem key={key} value={level}>
            {level}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectMenu;
