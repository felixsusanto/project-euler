// https://projecteuler.net/problem=4

export const palindromeTest = (number) => {
  return (number + '').split('').reverse().join('') === (number + '');
}

export const largestPalindromeProduct = (digits) => {
  var it = Math.pow(10, digits) - 1;
  var res = [];
  for(let i = it; i > 0; i-- ) {
    for(let j = it; j > 0; j--) {
      if(palindromeTest(i*j)) {
        res.push(i*j);
      }
    }
  }
  return Math.max(...res);
};