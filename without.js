const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  //take in a source array and a itemsToRemove array
  // return source.filter(element => !itemsToRemove.includes(element));
  const filteredSource = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      filteredSource.push(element);
    }
  }

  return filteredSource;
};

// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual([1,2,3], [1,2,'3']);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(["hello", "world"], without(words, ["lighthouse"]));