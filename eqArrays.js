const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  // 1. compare the lengths of the arrays
  if (array1.length !== array2.length) {
    return false;
  }

  // 2. compare the strings of the arrays using a for loop
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
};

// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 'hello']), false);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]), false);
module.exports = eqArrays;