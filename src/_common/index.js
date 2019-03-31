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

export const getPrimeNumberByIndex = (baseOneIndex) => {
  const arr = [ 2 ];
  let i = 2;
  while(arr.length < baseOneIndex) {
    const isNotPrime = arr.some((v) => i % v === 0);
    if (!isNotPrime) {
      // prime
      arr.push(i);
    }
    i++;
  }
  return arr[baseOneIndex - 1];
};