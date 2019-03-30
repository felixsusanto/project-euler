import { largestPrimeFactor, getPrimeNumber } from './003';

test('prime number below 100', () => {
  expect(getPrimeNumber(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
});

test('largest prime factor of 13195', () => {
  expect(largestPrimeFactor(13195)).toEqual([5,7,13,29]);
});


test('largest prime factor', () => {
  expect(Math.max(...largestPrimeFactor(600851475143))).toBe(6857);
});