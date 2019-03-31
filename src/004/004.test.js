import { palindromeTest, largestPalindromeProduct } from './004';

describe('palindrome test', () => {
  const trueCase = [9009,1221,5005,101,11,5];
  const falseCase = [1234,4321,12];
  it('should be true', () => {
    trueCase.forEach((val) => {
      expect(palindromeTest(val)).toBe(true);
    });
  });
  it('should be false', () => {
    falseCase.forEach((val) => {
      expect(palindromeTest(val)).toBe(false);
    });
  });
});

describe('largest palindrome product', () => {
  it('should be 9009', () => {
    expect(largestPalindromeProduct(2)).toBe(9009);
  });
  it('should be 906609', () => {
    expect(largestPalindromeProduct(3)).toBe(906609);
  });
});