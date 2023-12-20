const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  
  for (let i = 0; i < String(n).length; i++) {
    const str = String(n).split('');
    
    str.splice(i, 1);
    
    arr.push(+str.join(''));
  }
  
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
