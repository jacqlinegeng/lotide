const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middleTest", () => {
  it("returns [26] for [1, 5, 26, 7, 8]", () => {
    assert.deepEqual(middle([1, 5, 26, 7, 8]), [26]);
  });
});

// const middleNum = middle([1, 5, 26, 7, 8]);
// console.log(middleNum);