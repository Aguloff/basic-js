const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },

  addLink(value = '( )') {
    this.values.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!this.values[position - 1]) {
      this.values = [];
       throw Error("You can't remove incorrect link!");
    }
    this.values.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.values.reverse();
    return this;
  },

  finishChain() {
    const chain = [...this.values];
    this.values = [];
    return chain.join('~~');
  }
};

module.exports = {
  chainMaker
};
