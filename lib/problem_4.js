const largest = (nums) => {
  let stringified = nums.map(n => n.toString());
  let sorted = stringified.sort((a, b) => {
    if(a[0] > b[0]) return -1;
    if(a[0] < b[0]) return 1;
    return 0;
  });

  let num = sorted.join('');

  return Number.parseInt(num);
};

module.exports = largest;
