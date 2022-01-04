import detectDeviceType from "./detectDeviceType";

/**
 * Use scroll to fix ios input bug. (Mobile only)
 *
 */
const iosInputScrollFix = () => {
  const isMobile = detectDeviceType() === "Mobile";
  if (isMobile) {
    document.querySelectorAll("input, select, textarea").forEach((input) => {
      input.addEventListener("blur", () => {
        window.scrollBy(0, -1);
      });
    });
  }
};
export default iosInputScrollFix;
