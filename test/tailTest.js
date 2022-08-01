const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
// assertArraysEqual(result, ["Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [1, 7] for [1, 2, 7]", () => {
    assert.deepEqual(tail([1,2,7]), [2, 7]);
  });

});