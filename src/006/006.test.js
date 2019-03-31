import { sumSquareDifference } from './006';

describe('sumSquareDifference', () => {
  it('should be 2640 for 10', () => {
    expect(sumSquareDifference(10)).toBe(2640);
  });
  it('should be 25164150 for 100', () => {
    expect(sumSquareDifference(100)).toBe(25164150);
  });
});