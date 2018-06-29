const for_loop = (nums) => {
  let result = 0;

  for(let i = 0; i < nums.length; i++) {
    result += nums[i];
  }

  return result;
};

const while_loop = (nums) => {
  let result = 0;

  while(nums.length > 0) {
    result += nums.pop();
  }

  return result;
};

const recursion = () => {
  
};

module.exports = {
  for_loop,
  while_loop,
  recursion
};
