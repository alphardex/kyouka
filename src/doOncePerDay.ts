/**
 * Do something once per day.
 * @param cacheName
 * @param cb
 * @param storage
 */
const do0ncePerDay = (
  cacheName: string,
  cb: () => void,
  storage = "session"
) => {
  // @ts-ignore
  const cache = window[storage + "Storage"];
  const today = new Date().toISOString().split("T")[0];
  const lastExecuted = cache.getItem(cacheName);

  if (lastExecuted !== today) {
    cb();
    cache.setItem(cacheName, today);
  }
};

export default do0ncePerDay;
