/**
 * Do something just once, or another thing if already done.
 * @param cacheName
 * @param cb
 * @param storage
 */
const doOnceOrAnother = (
  cacheName: string,
  cb: () => void,
  cb2: () => void,
  storage = "session"
) => {
  // @ts-ignore
  const cache = window[storage + "Storage"];
  if (!cache.getItem(cacheName)) {
    cache.setItem(cacheName, "1");
    cb();
  } else {
    cb2();
  }
};

export default doOnceOrAnother;
