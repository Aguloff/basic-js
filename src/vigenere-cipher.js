const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    reverse = value;
  }

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  encrypt(text, key) {
    const gaps = [];
    
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        gaps.push(i);
      }
    }

    const word = text.split(' ').join('');
    let newKey = '';
    newKey = newKey.padStart(word.length, key).split('');
    gaps.forEach(i => newKey.splice(i, 0, ' '));
    newKey = newKey.join('').toUpperCase();
  
    let res = '';

    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ' || text[i] === '!') {
        res += text[i];
        continue;
      }
      let x = alphabet.indexOf(text[i].toUpperCase()) + alphabet.indexOf(newKey[i]);
      if (x > 25) {
        x = x % 26;
      }
      res += alphabet[x];
    }

    return reverse ? res : res.split('').reverse().join('');
  }

  decrypt(text, key) {
    const gaps = [];
    
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        gaps.push(i);
      }
    }

    const word = text.split(' ').join('');
    let newKey = '';
    newKey = newKey.padStart(word.length, key).split('');
    gaps.forEach(i => newKey.splice(i, 0, ' '));
    newKey = newKey.join('').toUpperCase();
  
    let res = '';

    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ' || text[i] === '!') {
        res += text[i];
        continue;
      }
      let x = alphabet.indexOf(text[i].toUpperCase()) - alphabet.indexOf(newKey[i]);
      if (x > 25) {
        x = x % 26;
      }
      if (x < 0) {
        x = 26 - Math.abs(x);
      }
      res += alphabet[x];
    }

    return reverse ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
