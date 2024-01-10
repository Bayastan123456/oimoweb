export const calcTotalPrice = (yurts) => {
  return yurts.reduce(
    (acc, curr) => {
      return { total: acc.total + curr.subPrice };
    },
    { total: 0 }
  ).total;
};
