const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const countS1 = {};
  const countS2 = {};
 
  for (const ch of s1) {
   countS1[ch] ? countS1[ch]++ : countS1[ch] = 1;
  }
   
  for (const ch of s2) {
   countS2[ch] ? countS2[ch]++ : countS2[ch] = 1;
  }
 
  for (const key in countS1) {
    if (countS2[key]) {
     sum += countS2[key] < countS1[key] ?  countS2[key] : countS1[key];
    }
  }
   
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
