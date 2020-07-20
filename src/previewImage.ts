/**
 * Preview an Image when user uploads an image file.
 *
 * @param {HTMLInputElement} inputEl
 * @param {HTMLImageElement} imgEl
 * @param {Function} cb
 */
const previewImage = (inputEl: HTMLInputElement, imgEl: HTMLImageElement, cb: Function) => {
    inputEl.addEventListener('change', e=>{
        const files = (e.target as HTMLInputElement).files;
        const file = files ? files[0] : null;
        const reader = new FileReader();
        if(file) {
            reader.readAsDataURL(file)
        }
        reader.addEventListener('load', ()=>{
            const base64URL = (reader.result as string);
            if(base64URL) {
                imgEl.src = base64URL;
                cb(base64URL);
            }
        })
    })
}
export default previewImage;
