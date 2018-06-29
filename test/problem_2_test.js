require('./test_helper')

const combine = require('../lib/problem2');

// Write a function that combines two lists by alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

describe('Problem 2', () => {
  it('should be able to combine two lists', () => {
    let a = ['a', 'b', 'c'];
    let b = [1, 2, 3];
    let expected = ['a', 1, 'b', 2, 'c', 3];

    expect(combine(a, b)).to.eql(expected);
  });

  it('should be able to combine two lists of differing length', () => {
    let a2 = ['a', 'b', 'c'];
    let b2 = [1, 2, 3, 4, 5];
    let expected = ['a', 1, 'b', 2, 'c', 3, 4, 5];

    expect(combine(a2, b2)).to.eql(expected);
  });
});
