const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed:${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${arr1} !== ${arr2}`);
  }

};

// assertArraysEqual([1,2,3], [1,2,3]);

module.exports = assertArraysEqual;