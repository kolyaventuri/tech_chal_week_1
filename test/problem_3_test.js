require('./test_helper');

const fib = require('../lib/problem3');
// Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

describe('Problem 3', () => {
  it('should be able to calculate the first 10 fibonnaci numbers', () => {
    expect(fib(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it('should be able to calculate the first 5 fibonnaci numbers', () => {
    expect(fib(5)).to.eql([0, 1, 1, 2, 3]);
  });
});
