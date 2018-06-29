require('./test_helper');

const P1 = require('../lib/problem1');

// Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.

const nums = [1,2,3,4,5];
const expected = 15;

describe('Problem 1', () => {
  it('should be able to sum numbers with a for-loop', () => {
    let result = P1.for_loop(nums);
    expect(result).to.eq(expected);
  });

  it('should be able to sum numbers with a while-loop', () => {
    let result = P1.while_loop(nums);
    expect(result).to.eq(expected);
  });

  it('should be able to sum numbers with a for-loop', () => {
    let result = P1.recursion(nums);
    expect(result).to.eq(expected);
  });
});
