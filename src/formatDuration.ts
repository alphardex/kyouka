import { Time } from "../types/types";

/**
 * Return the formatted duration with 4 units: day, hour, minute, second.
 *
 * @param {number} seconds
 */
const formatDuration = (seconds: number): Time => ({
    day: Math.floor(seconds / 86400),
    hour: Math.floor(seconds / 3600) % 24,
    minute: Math.floor(seconds / 60) % 60,
    second: Math.floor(seconds) % 60
});
export default formatDuration;
