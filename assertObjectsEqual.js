const { array } = require("yargs");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + actual + ' !== ' + expected);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // it turns into an array from the keys in the object
  const keys2 = Object.keys(object2);
  // console.log(object1, object2);

  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) { // loop through one of the sets of the keys
    // if (Object.value(object1) !== Object.value(object2)) return false;
    // console.log("----");
    // console.log("key:", key);
    const valueFromObj1 = object1[key];// calling the variable from the object
    const valueFromObj2 = object2[key];
    // console.log("value1:", valueFromObj1);
    // console.log("value2:", valueFromObj2);

    if (Array.isArray(valueFromObj1)) {
      // console.log("value from obj1 is an array");
      if (!Array.isArray(valueFromObj2)) {
        return false;
      }
      const theseTwoArraysAreEqual = eqArrays(valueFromObj1, valueFromObj2); //calling the two arrays
      if (!theseTwoArraysAreEqual) {
        return false;
      }
    } else if (valueFromObj1 !== valueFromObj2) { // the for loop will run if the values from two objects are not the same
      // console.log("not equal:");
      return false;
    }
  }
  
  return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  // takes in two arrays and returns true or false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  // inspect the object, so show it to me fully (i.e. shows the values of keys)
  const inspect = require('util').inspect; // when outputting an object, the inspect will parse out all of the info of the object
  if (eqObjects(obj1, obj2)) {
    console.log(obj1, obj2);
    console.log(`✅✅✅ Assertion Passed:${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${inspect(obj1)} === ${inspect(obj2)}`);
  }
};

// when console.log, we will see the full value of the object, and outputs the string
// when console.log a string interpulation of an object, it just outputs the "object Object" <= prototype value, because the computer cannot read the object values (key value pairs) within the string interpulation

// JSON.stringify(object) <- this will turn the object into a string

const ab = { a: "1", b: 2};
const bc = { b: 2, a: "1"};
console.log("display:", ab);
assertObjectsEqual(ab, bc); // without the inspect, it just passes through the "copying by reference" of the value, vs inspect will inspect an object
