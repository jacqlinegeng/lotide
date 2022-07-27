const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      !results[sentence[i]] ? results[sentence[i]] = [i] : results[sentence[i]].push(i);
    } // if the letter is not in the results object, then create the letter key, and initialize
    // the value with the index
    //if the letter does exist in the results object, then push the index value into the array
  }
  return results;
};


const letters = letterPositions("lighthouse in the house");
console.log(letters);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + actual + ' !== ' + expected);
  }
};

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  // takes in two arrays and returns true or false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

assertEqual(eqArrays(letterPositions("hello").e, [1]));
