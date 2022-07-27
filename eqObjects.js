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
    console.log("----");
    console.log("key:", key);
    const valueFromObj1 = object1[key];// calling the variable from the object
    const valueFromObj2 = object2[key];
    console.log("value1:", valueFromObj1);
    console.log("value2:", valueFromObj2);

    if (Array.isArray(valueFromObj1)) {
      console.log("value from obj1 is an array");
      if (!Array.isArray(valueFromObj2)) {
        return false;
      }
      const theseTwoArraysAreEqual = eqArrays(valueFromObj1, valueFromObj2); //calling the two arrays
      if (!theseTwoArraysAreEqual) {
        return false;
      }
    } else if (valueFromObj1 !== valueFromObj2) { // the for loop will run if the values from two objects are not the same
      console.log("not equal:");
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

const book1 = { title: "sapiens", ratings: 5 };
const book2 = { ratings: ["2", 3], title: "sapiens" }; // i.e. comparing dc.d to cd.d
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

assertEqual(eqObjects(book1, book2), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects({a: "1", b: "1"}, {a: "1", b: "2"}), false);