const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


describe("#assertEqual", () => {
  it("returns assertion passed for eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true", () => {
    assert.deepEqual(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true));
  });
});


// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 'hello']), false);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]), false);