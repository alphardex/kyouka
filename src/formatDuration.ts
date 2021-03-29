import { Time } from "../types/types";

/**
 * Return the formatted duration with 4 units: day, hour, minute, second.
 *
 * @param {number} seconds
 */
const formatDuration = (ms: number): Time => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  return time;
};
export default formatDuration;
