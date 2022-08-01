const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEquals", () => {
  it("returns assertion passed for [1,2,3], [1,2,3]", () => {
    assert.deepEqual(assertArraysEqual([1,2,3], [1,2,3]));
  });
});

// assertArraysEqual([1,2,3], [1,2,3]);