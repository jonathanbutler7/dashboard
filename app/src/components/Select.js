import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import style from './Select.module.scss';
import { useDashboard } from '../context';
import { useStyles } from '../helpers/styles';

function SelectMenu({ inEditView, id, prevLevel }) {
  const { setSnackbar, setSelect } = useDashboard();
  const [it, setIt] = useState('');
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

  function handleChange(event) {
    let level = event.target.value;
    setIt(level);
    setSnackbar(`Successfully changed level to ${level}`);
    setSelect(level);
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
        style={{ color: '#E0E0E0' }}
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
