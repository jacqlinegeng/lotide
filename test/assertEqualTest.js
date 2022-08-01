const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns assertion passed for (1, 1)", () => {
    assert.deepEqual(assertEqual(1, 1));
  });
});
// console.log(assertEqual(1, 1));