require('./test_helper');

const P1 = require('../lib/problem1');

// Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.

describe('Problem 1', () => {
  it('should be able to sum numbers with a for-loop', () => {
    let result = P1.for_loop([1,2,3,4,5]);
    expect(result).to.eq(15);
  });

  it('should be able to sum numbers with a while-loop', () => {
    let result = P1.while_loop([1,2,3,4,5]);
    expect(result).to.eq(15);
  });

  it('should be able to sum numbers with recursion', () => {
    let result = P1.recursion([1,2,3,4,5]);
    expect(result).to.eq(15);
  });
});
