import { fibonacci, addOnlyEvenMembers } from './002';

test('fibonacci below 10', () => {
  expect(fibonacci(10)).toEqual([1,2,3,5,8]);
});

test('fibonacci below 10 adding even number', () => {
  expect(fibonacci(10).reduce(addOnlyEvenMembers, 0)).toBe(10);
});

test('fibonacci below 10 adding even number', () => {
  expect(fibonacci(4000000).reduce(addOnlyEvenMembers, 0)).toBe(4613732);
});