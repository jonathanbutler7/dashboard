export function pickAvatarColor(level) {
  if (level === 'error') return 'secondary';
  if (level === 'warn') return 'primary';
  if (level === 'status') return 'default';
}

export function getAvatar(level) {
  return level.charAt(0).toUpperCase();
}
