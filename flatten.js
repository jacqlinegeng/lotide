const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function(array) {
  let result = [];

  array.forEach(element =>  {
    if (Array.isArray(element)) {
      
      const flatArray = flatten(element);
      result = result.concat(flatArray);
    
      return result;
    }

    result.push(element);
  });
  
  return result;
};

const result = flatten([1, 2, [3, 4], 5, [6]]);
console.log(result);