const combine = (a, b) => {
  let longest = a.length >= b.length ? a.length : b.length;
  let newArray = [];
  
  for(let i = 0; i < longest; i++) {
    if(a[i]) newArray.push(a[i]);
    if(b[i]) newArray.push(b[i]);
  }


  return newArray;
};

module.exports = combine;
