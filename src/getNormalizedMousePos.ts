/**
 * Get normalized mouse position.
 * @param e
 * @returns
 */
const getNormalizedMousePos = (e: any) => {
  return {
    x: (e.clientX / window.innerWidth) * 2 - 1,
    y: -(e.clientY / window.innerHeight) * 2 + 1,
  };
};

export default getNormalizedMousePos;
