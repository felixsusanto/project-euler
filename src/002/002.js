// https://projecteuler.net/problem=2

export const fibonacci = (limit, acc) => {
  acc = acc || [1,2];
  const start = acc[acc.length - 2];
  const last = acc[acc.length - 1];
  const next = start + last;
  if(next < limit) {
    acc.push(next);
    fibonacci(limit, acc);
  } 
  return acc;
};

export const addOnlyEvenMembers = (acc, val) => {
  if(val >= 2 && val % 2 === 0) {
    return acc + val;
  } else {
    return acc;
  }
}