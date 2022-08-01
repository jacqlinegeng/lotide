const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  // take a slice of the array from the beginning
  const results = [];
  for (let item of array) {
    // if (!callback(item)) {
    //   results.push(item);
    // } else {
    //   return results;  // stop when the callback returns a truthy value
    // }
    if (!callback(item)) {
      results.push(item);
    }
    if (callback(item)) {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // the first part is the array and the second part is the callback
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);