require('./test_helper');

// Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ..., 9 (in this order) such that the result is always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.

const order = require('../lib/problem5');
// 11 solutions

describe('Problem 5', () => {
  it('should be able to find all 11 solutions', () => {
    let result = order();

    for(let sequence of result) {
      expect(eval(sequence)).to.eq(100);
    }

    expect(result.length).to.eq(11);
  });
});
