/**
 * Converts a time string in the format "MM:SS" or "HH:MM:SS" to total seconds.
 * @param time 
 * @returns 
 */
const timeStringToSeconds = (time: string): number | null => {
  const timeParts = time.split(":").map(Number);

  if (timeParts.length === 2) {
    const [minutes, seconds] = timeParts;
    return minutes! * 60 + seconds!;
  } else if (timeParts.length === 3) {
    const [hours, minutes, seconds] = timeParts;
    return hours! * 3600 + minutes! * 60 + seconds!;
  } else {
    return null;
  }
};

export default timeStringToSeconds;
