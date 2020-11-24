import kyoka from "./kyouka";

/**
 * Preview an Image when user uploads an image file.
 *
 * @param {any} inputEl
 * @param {any} imgEl
 * @param {Function} cb
 */
const previewImage = (inputEl: any, imgEl: any, cb: Function) => {
  inputEl.addEventListener("change", (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    const file = files ? files[0] : null;
    kyoka.loadImageAsBase64URL(file, (base64URL: string) => {
      if (base64URL) {
        imgEl.src = base64URL;
        cb(base64URL);
      }
    });
  });
};
export default previewImage;
