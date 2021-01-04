import { getChipClass } from './helpers';
import { orange, red, green } from '@material-ui/core/colors';
export const customOrange = orange[300];
export const customGreen = green[700];
export const customRed = red[400];

export function customChip(level) {
  return {
    root: {
      backgroundColor: getChipClass(level),
    },
  };
}

export const selectStyle = {
  backgroundColor: 'gainsboro',
  width: '100px',
  marginRight: '1rem',
};
