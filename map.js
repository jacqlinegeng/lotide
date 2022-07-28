const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // temporary code:
  const results = []; // results array is empty, it will print out an empty array at the end
  for (let item of array) {
  //   console.log('item BEFORE: ', item);
  //   console.log('item AFTER: ', callback(item));
  //   console.log('---');
    results.push(callback(item));
    
  }

  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + actual + ' !== ' + expected);
  }
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  // takes in two arrays and returns true or false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('✅✅✅ Assertion Passed:' + arr1 + ' === ' + arr2);
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + arr1 + ' !== ' + arr2);
  }
};

assertArraysEqual(["ground", "control", "to", "major", "tom"], ["ground", "control", "major", "tom", "to",]);
assertArraysEqual(["ground", "control", "to", "major", "tom"], ["ground", "control", "to", "major", "tom"]);
