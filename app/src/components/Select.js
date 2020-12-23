import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { levels } from '../store/levels';
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

function SelectMe() {
    const { setSelect } = useDashboard();
  const classes = useStyles();
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    setSelect(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='demo-simple-select-label'>level</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={age}
        onChange={handleChange}
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

export default SelectMe;
