/**
 * Do something just once.
 * @param cacheName
 * @param cb
 * @param storage
 */
const doOnce = (cacheName: string, cb: () => void, storage = "session") => {
  // @ts-ignore
  const cache = window[storage + "Storage"];
  if (!cache.getItem(cacheName)) {
    cache.setItem(cacheName, "1");
    cb();
  }
};

export default doOnce;
