const assertEqual = require('./assertEqual');


const findKey = function(object, callback) {
  // const arrayOfObj = Object.keys(object); // this puts the object keys into an array
  for (let key in object) { // for..in loop is used for objects
    if (callback(object[key])) return key; // the callback argument is x.stars === 2, which gets summed into callback
    //object[key].star === 2 <== this is not used because we want function to have reusability
    console.log(object[key]);
  }
};

const check = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 6 },
  "Akelarre":  { stars: 2 }
}, x => x.stars === 6); // => "noma"

// //console.log(check)
assertEqual(check, "Ora");