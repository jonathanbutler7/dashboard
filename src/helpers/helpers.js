import moment from 'moment-timezone';

export function getChipClass(level, classes) {
  if (level === 'warn') return classes.warningChip;
  if (level === 'status') return classes.statusChip;
  if (level === 'error') return classes.errorChip;
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
