// https://projecteuler.net/problem=5
import { getPrimeNumber } from '../_common';

export const smallestMultiple = (limit) => {
  const testArr = [ ...Array(limit).keys() ].map(v => v+1);
  const smallestFactor = getPrimeNumber(limit).reduce((a,b) => a*b, 1);
  const reducer = (a, b) => a && (factor % b === 0);
  let factor = smallestFactor;
  let condition = testArr.reduce(reducer, true);
  while (!condition) {
    factor += smallestFactor;
    condition = testArr.reduce(reducer, true);
  }

  return factor;
};