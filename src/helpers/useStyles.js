import { makeStyles } from '@material-ui/core/styles';
import { getChipClass } from './helpers'
import { orange, red, green } from '@material-ui/core/colors';
export const customOrange = orange[300];
export const customGreen = green[700];
export const customRed = red[400];

export const useStyles = makeStyles({
  formControl: {
    margin: 1,
    minWidth: 120,
  },
  select: {
    color: 'white',
  },
});

export function customChip(level) {
  return {
    root: {
      backgroundColor: getChipClass(level),
    },
  }
}
