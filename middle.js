const assertEqual = require('./assertEqual');

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  for (let i = 0; i < array.length; i++) {
    if (array.length > 1) {
      if (array.length % 2 === 1) {
        return [array[middleIndex]];
      } else {
        return [array[middleIndex - 1], array[middleIndex]];
      }
      // console.log(array[middleIndex]);
    }
  }

};
// [1, 5, 26, 7, 8] var middleIndex = array.length/2
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
// const output = middle([1, 5, 26, 7, 8]);
// console.log(output);

module.exports = middle;
