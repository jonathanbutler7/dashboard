import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { levels, levelsAll } from '../store/levels.js';
import { selectStyle } from '../helpers/useStyles';
import style from './Select.module.scss';
import { useDashboard } from '../context';

function SelectMenu({ inEditView, id, prevLevel }) {
  const { setSnackbar, setSelect, dispatch } = useDashboard();
  const [level, setLevel] = useState('');
  let options;
  if (inEditView) {
    options = levels;
  }
  if (!inEditView) {
    options = levelsAll;
  }

  function handleChange(event) {
    let newLevel = event.target.value;
    setLevel(newLevel);
    setSnackbar(`Successfully changed level to ${newLevel}`);
    setSelect(newLevel);
    dispatch({ type: 'change-level', payload: { id: id, level: newLevel } });
  }

  return (
    <FormControl variant='outlined'>
      <InputLabel
        id='demo-simple-select-outlined-label'
        classes={{
          underline: style.underline,
        }}
      >
        Levels
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        style={selectStyle}
        value={level}
        onChange={handleChange}
        label='Levels'
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
