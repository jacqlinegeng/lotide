const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(actual, expected) {
  // inspect the object, so show it to me fully (i.e. shows the values of keys)
  const inspect = require('util').inspect; // when outputting an object, the inspect will parse out all of the info of the object
  if (eqObjects(actual, expected)) {
    console.log(actual, expected);
    console.log(`✅✅✅ Assertion Passed:${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${inspect(actual)} === ${inspect(expected)}`);
  }
};

// when console.log, we will see the full value of the object, and outputs the string
// when console.log a string interpulation of an object, it just outputs the "object Object" <= prototype value, because the computer cannot read the object values (key value pairs) within the string interpulation

// JSON.stringify(object) <- this will turn the object into a string

const ab = { a: "1", b: 2};
const bc = { b: 2, a: "1"};
console.log("display:", ab);
assertObjectsEqual(ab, bc); // without the inspect, it just passes through the "copying by reference" of the value, vs inspect will inspect an object
