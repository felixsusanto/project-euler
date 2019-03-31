// https://projecteuler.net/problem=3

export const getPrimeNumber = (limit) => {
  const arr = [2,3,5,7];
  for(let i = 11; i < limit; i++) {
    const isNotPrime = arr.some((v) => i % v === 0);
    if(!isNotPrime) {
      // prime
      arr.push(i);
    }
  }
  return arr;
};

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