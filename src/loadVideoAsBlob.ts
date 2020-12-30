/**
 * Load the video and covert it to blob.
 * @param file
 * @param cb
 * @param format
 */
const loadVideoAsBlob = (file: File | Blob, cb: Function, format = "mp4") => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.addEventListener("load", () => {
    const buffer = reader.result;
    // @ts-ignore
    const blob = new Blob([new Uint8Array(buffer)], {
      type: `video/${format}`,
    });
    cb(blob);
  });
};
export default loadVideoAsBlob;
