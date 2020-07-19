const getTimeDeltaAsSeconds = (begin: Date | number, end: Date | number): number => {
    const beginTime = begin instanceof Date ? begin.getTime() : begin;
    const endTime = end instanceof Date ? end.getTime() : end;
    const diff = endTime - beginTime;
    const seconds = Math.floor(diff / 1000 % 60);
    return seconds
}
export default getTimeDeltaAsSeconds;
