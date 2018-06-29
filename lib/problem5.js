const order = () => {
  let nums = [1,2,3,4,5,6,7,8,9];

  let stack = [];
  let cur = "";

  for(let num of _nums) {
    cur += num;
    if(eval(cur) > 100) {
      let str = cur.substr(0, cur.length - 1);
      stack.push(str);
    }
  }
};

module.exports = order;
