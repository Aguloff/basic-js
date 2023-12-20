const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';
  const steck = [str[0]];
  
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === steck[0]) {
      count ++;
    } else {
      result += count > 1 ? count + steck[0] : steck[0];
      steck[0] = str[i];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
