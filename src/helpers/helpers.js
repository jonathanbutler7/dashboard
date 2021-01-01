import moment from 'moment-timezone';

export function pickAvatarColor(level) {
  if (level === 'error') return 'secondary';
  if (level === 'warn') return 'orange';
  if (level === 'status') return 'default';
}

export function getAvatar(level) {
  return level.charAt(0).toUpperCase();
}

export function getReadableTime(timestamp) {
  return moment(timestamp).format('llll');
}
