export const getPrimeNumber = (limit) => {
  const arr = [2, 3, 5, 7];
  for (let i = 11; i < limit; i++) {
    const isNotPrime = arr.some((v) => i % v === 0);
    if (!isNotPrime) {
      // prime
      arr.push(i);
    }
  }
  return arr;
};