const assertEqual = require('./assertEqual');

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));

// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) return false; // if the array length of index does not equal to each other, return false
//   // takes in two arrays and returns true or false
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) return false; // if the array strings don't equal to each other, return false
//   }

//   return true;
// };

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3', '4']), false);

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
  for (let i = 0; i < array2.length; i++) {
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