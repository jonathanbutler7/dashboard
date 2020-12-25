import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import style from './Select.module.scss';
import { useDashboard } from '../context';
import { useStyles } from '../helpers/styles';

function SelectMenu({ inEditView, id, prevLevel }) {
  const { select, dispatch, setSnackbar, setSelect } = useDashboard();
  const [it, setIt] = useState('');
  let options;
  let level;
  const levelsAll = ['view all', 'warn', 'error', 'status'];
  const levels = ['warn', 'error', 'status'];
  const classes = useStyles();

  if (inEditView) {
    options = levels;
    level = select;
  }
  if (!inEditView) {
    options = levelsAll;
  }

  function handleChange(event) {
    let level = event.target.value;
    setIt(level);
    setSnackbar('Successfully changed level');
    setSelect(level)
    // if (!inEditView) {
    //   setSelect(level);
    //   dispatch({ type: 'filter', payload: level });
    // }
    // if (inEditView) {
    //   setSelect(level);
    //   changeLevel(level);
    // }
  }

  function changeLevel(level) {
    dispatch({ type: 'change-level', payload: { id: id, level: level } });
  }

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel
        id='demo-simple-select-outlined-label'
        className={style.label}
        style={{ color: '#E0E0E0' }}
      >
        Levels
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        value={it}
        onChange={handleChange}
        label='Levels'
        className={style.label}
      >
        {options.map(
          (level, key) =>
            level !== prevLevel && (
              <MenuItem key={key} value={level}>
                {level}
              </MenuItem>
            )
        )}
      </Select>
    </FormControl>
  );
}

export default SelectMenu;
