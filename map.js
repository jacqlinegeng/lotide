const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
 
  const results = []; // results array is empty, it will print out an empty array at the end
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(["ground", "control", "to", "major", "tom"], ["ground", "control", "major", "tom", "to",]);
assertArraysEqual(["ground", "control", "to", "major", "tom"], ["ground", "control", "to", "major", "tom"]);
