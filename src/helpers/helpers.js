import moment from 'moment-timezone';
import { customOrange, customGreen, customRed } from '../helpers/useStyles';

export function getChipClass(level) {
  if (level === 'warn') return customOrange;
  if (level === 'status') return customGreen;
  if (level === 'error') return customRed;
}

export function getAvatar(level) {
  return level.charAt(0).toUpperCase();
}

export function getReadableTime(timestamp) {
  return moment(timestamp).format('llll');
}

export function getPlural(state) {
  if (state.length === 1) {
    return 'message';
  }
  if (state.length !== 1) {
    return 'messages';
  }
}
