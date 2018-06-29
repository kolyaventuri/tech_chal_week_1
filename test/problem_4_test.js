require('./test_helper')
// Write a function that given a list of non negative integers, arranges them such that they form the largest possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.

const largest = require('../lib/problem_4');

describe('Problem 4', () => {
  it('should be able to arrange the largest number', () => {
    expect(largest([50, 2, 1, 9])).to.eq(95021);
  });

  it('should be able to do this with different numbers', () => {
    expect(largest([1,1])).to.eq(11);
    expect(largest([1,5])).to.eq(51);
    expect(largest([10,9])).to.eq(910);
  });
});
