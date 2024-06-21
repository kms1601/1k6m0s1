const secToHMS = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = secs.toString().padStart(2, '0');

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

export default secToHMS;