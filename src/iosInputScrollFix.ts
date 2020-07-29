/**
 * Use scroll to fix ios input bug.
 *
 */
const iosInputScrollFix = () => {
    document.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('blur', () => {
            window.scrollBy(0, -1)
        })
    })
}
export default iosInputScrollFix;
