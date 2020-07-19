/**
 * Disable pull down.
 *
 */
const disablePullDown = () => {
    document.body.addEventListener('touchmove', e => {
        e.preventDefault()
    }, { passive: false });
}
export default disablePullDown;
