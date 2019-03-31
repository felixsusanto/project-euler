import { smallestMultiple } from './005';

describe('smallestMultiple', () => {
  it('should be 2520 for 10', () => {
    expect(smallestMultiple(10)).toBe(2520);
  });
  it('should be 232792560 for 20', () => {
    expect(smallestMultiple(20)).toBe(232792560);
  });
});