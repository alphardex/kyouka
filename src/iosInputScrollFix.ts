import kyoka from "./kyouka";

/**
 * Use scroll to fix ios input bug. (Mobile only)
 *
 */
const iosInputScrollFix = () => {
  const isMobile = kyoka.detectDeviceType() === "Mobile";
  if (isMobile) {
    document.querySelectorAll("input, select, textarea").forEach((input) => {
      input.addEventListener("blur", () => {
        window.scrollBy(0, -1);
      });
    });
  }
};
export default iosInputScrollFix;
