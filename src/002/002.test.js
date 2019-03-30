import fibonacci from './002';

test('fibonacci below 10', () => {
  expect(fibonacci(10)).toEqual([1,2,3,5,8]);
});
// 233168