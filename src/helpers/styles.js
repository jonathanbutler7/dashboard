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
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));
