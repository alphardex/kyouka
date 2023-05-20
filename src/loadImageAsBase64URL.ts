/**
 * Load the image and covert it to base64 url.
 * @param blob
 * @param cb
 */
const loadImageAsBase64URL = (blob: any, cb: Function) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.addEventListener("load", () => {
    const base64URL = reader.result;
    cb(base64URL);
  });
};

export default loadImageAsBase64URL;
