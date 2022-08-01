const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 'hello']), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]), false);