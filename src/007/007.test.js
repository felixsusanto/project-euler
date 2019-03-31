import { getPrimeNumberByIndex } from './007';

describe('getPrimeNumberByIndex', () => {
  it('should be 13 for 6', () => {
    expect(getPrimeNumberByIndex(6)).toBe(13);
  });
  it('should be 104743 for 10001', () => {
    expect(getPrimeNumberByIndex(10001)).toBe(104743);
  });
});