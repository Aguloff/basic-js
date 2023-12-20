const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  
  const res = [];
  
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    
    if (el === '--discard-prev') { 
      res.splice(i - 1, 1);
      continue;
    } 
    
     if (el === '--discard-next') {
      i += 1;
      continue;
    } 
    
    if (el === '--double-next') {
      res.push(arr[i + 1]);
      continue;
    }
    
    if (el === '--double-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue;
      } 
      res.push(arr[i - 1]);
      continue;
    }
    res.push(el);
  }
  return res.filter(elem => elem);
}

module.exports = {
  transform
};
