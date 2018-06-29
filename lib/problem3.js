const fib = (n, sequence) => {
  if(n == 0) return [];
  if(n == 1) return [0];

  if(!sequence) {
    sequence = [0, 1];
  }

  if(sequence.length == n) return sequence;

  let last        = sequence[sequence.length - 1];
  let penultimate = sequence[sequence.length - 2];

  sequence.push(last + penultimate);

  return fib(n, sequence);
};

module.exports = fib;
