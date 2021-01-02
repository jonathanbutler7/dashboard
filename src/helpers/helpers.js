import moment from 'moment-timezone';

export function pickAvatarColor(level) {
  if (level === 'error') return 'secondary';
  if (level === 'warn') return 'primary';
  if (level === 'status') return 'default';
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
