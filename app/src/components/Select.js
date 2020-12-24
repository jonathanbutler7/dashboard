import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import style from './Select.module.scss';
import { useDashboard } from '../context';
import { useStyles } from '../helpers/styles';

function SelectMenu({ inEditView, id }) {
  const { setSelect, dispatch } = useDashboard();
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
    if (!inEditView) {
      setSelect(event.target.value);
    }
    if (inEditView) {
      setSelect(event.target.value);
      changeLevel(event.target.value);
    }
  };

  function changeLevel(level) {
    dispatch({ type: 'change-level', payload: { id: id, level: level } });
  }

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel
        id='demo-simple-select-outlined-label'
        className={style.label}
      >
        Levels
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        value={''}
        onChange={handleChange}
        label='Levels'
        className={style.label}
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
