const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('✅✅✅ Assertion Passed:' + arr1 + ' === ' + arr2);
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + arr1 + ' !== ' + arr2);
  }

};

// assertArraysEqual([1,2,3], [1,2,3]);

module.exports = assertArraysEqual;