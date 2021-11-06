/**
 * Sorts an array of objects, ordered by properties and orders.
 * @param arr
 * @param props
 * @param orders
 * @returns
 */
const orderBy = (arr: any[], props: string[], orders: string[]) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

export default orderBy;
