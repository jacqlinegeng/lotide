const assert = require('chai').assert;
const middle = require('../middle');

describe("#middleTest", () => {
  it("returns [26] for [1, 5, 26, 7, 8]", () => {
    assert.deepEqual(middle([1, 5, 26, 7, 8]), [26]);
  });
});
