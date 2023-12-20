const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const arr1 = [];
  const {additionRepeatTimes = 1, repeatTimes = 1} = options;
  
  for (let i = 0; i < additionRepeatTimes; i++) {
    arr1.push(options.addition === null ? 'null' : options.addition);
  }

  const string = str + arr1.join(options.additionSeparator || '|');

  const arr2 = [];

  for (let i = 0; i < repeatTimes; i++) {
    arr2.push(string);
  }

  return arr2.join(options.separator || '+');
}

module.exports = {
  repeater
};
