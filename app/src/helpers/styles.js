import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    '&:before': {
      borderColor: 'red',
    },
    '&:after': {
      borderColor: 'red',
    },
  },
  icon: {
    fill: 'red',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: 200,
    "& .MuiOutlinedInput-input": {
      color: "green"
    },
    "& .MuiInputLabel-root": {
      color: "green"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "red"
    },
    "&:hover .MuiInputLabel-root": {
      color: "red"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "purple"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple"
    }
  }
}));
