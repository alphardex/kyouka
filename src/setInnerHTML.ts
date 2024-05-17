/**
 * Executing <script> elements inserted with .innerHTML.
 * ref: https://stackoverflow.com/a/47614491
 *
 * @param elm
 * @param html
 */
const setInnerHTML = (elm: any, html: any) => {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll("script")).forEach((oldScript: any) => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach((attr: any) =>
      newScript.setAttribute(attr.name, attr.value)
    );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
};

export default setInnerHTML;
