export const sumSquareDifference = (limit) => {
  const sumFn = (a,b) => a + b;
  const sumSquare = [...Array(limit).keys()]
    .map(v => Math.pow(v+1,2))
    .reduce(sumFn,0)
  ;
  const sum = [...Array(limit).keys()]
    .map(v => v + 1)
    .reduce(sumFn,0)
  ;
  const squareOfSum = Math.pow(sum, 2);
  return squareOfSum - sumSquare;
}