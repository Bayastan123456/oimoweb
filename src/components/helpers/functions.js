export const calcTotalPrice = (yurts) => {
  return yurts.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};
