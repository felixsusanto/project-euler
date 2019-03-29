import multipleOf from './001';

test('multipleOf 3 and 5 below 10', () => {
  expect(multipleOf(10).group).toEqual([3,5,6,9]);
});
test('multipleOf 3 and 5 below 10 is 23', () => {
  expect(multipleOf(10).sum).toBe(23);
});
console.log(multipleOf(1000).sum);
// 233168