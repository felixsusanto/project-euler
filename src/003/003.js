// https://projecteuler.net/problem=3

import { getPrimeNumber } from '../_common';
export { getPrimeNumber };

export const largestPrimeFactor = (number) => {
  const arrFactor = getPrimeNumber(Math.min(number, 7000));
  const res = arrFactor.reduce((acc, val) => {
    if(number % val === 0) {
      acc.push(val);
    }
    return acc;
  }, []);
  return res;
};