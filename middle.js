const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = (array) => {
  let middleIndex = Math.floor(array.length / 2);
  if (array.length <= 1) {
    return array;
  }
  
  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 === 1) {
      return [array[middleIndex]];
    } else {
      return [array[middleIndex - 1], array[middleIndex]];
    }
  }

};

module.exports = middle;
