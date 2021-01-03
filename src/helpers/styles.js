import { makeStyles } from '@material-ui/core/styles';
import { orange, red, green } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  formControl: {
    margin: 1,
    minWidth: 120,
  },
  warningChip: {
    background: orange[300],
    color: 'black',
  },
  statusChip: {
    background: green[700],
    color: 'white',
  },
  errorChip: {
    background: red[400],
    color: 'white',
  },
  select: {
    color: 'white',
  },
});
