const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');



describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [1, 7] for [1, 2, 7]", () => {
    assert.deepEqual(tail([1,2,7]), [2, 7]);
  });

});