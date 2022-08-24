const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1); // it turns into an array from the keys in the object
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) return false;
  
  for (let key of key1) {
    let value1 = object1[key];
    let value2 = object2[key];
  
    // if both values are arrays => continue to compare arrays using eqArrays
    if (Array.isArray(value1)) {
    
      if (!Array.isArray(value2)) {
        return false;
      }

      const arrayEqual = eqArrays(value1, value2);
      if (!arrayEqual) {
        return false;
      }
    } else if (value1 !== value2) return false;

  }
  
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);

module.exports = eqObjects;