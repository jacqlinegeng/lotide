const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  
  return source.filter(element => !itemsToRemove.includes(element));
  
  
  // const filteredSource = [];
  // for (const element of source) {
  //   if (!itemsToRemove.includes(element)) {
  //     filteredSource.push(element);
  //   }
  // }

  // return filteredSource;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(["hello", "world"], without(words, ["lighthouse"]));