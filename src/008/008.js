// https://projecteuler.net/problem=8

export const largestProductInSeries = (numberString, digits) => {
  const flatten = numberString.trim().replace(/(\r\n|\n|\r)/gm, '').split('').map(v => +v);
  const result = flatten.reduce((acc,val,idx,arr) => {
      const res = arr.slice(idx, digits+idx)
        .reduce((a,b) => a*b, 1)
      ;
      return res > acc ? res : acc;
    }, 1)
  ;
  return result;
}