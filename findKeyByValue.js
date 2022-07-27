const { array } = require("yargs");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + actual + ' !== ' + expected);
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// create an object that flips the keys and values (i.e. showName, genre)
/*
{"The Expanse": sci_fi}
*/


const findKeyByValue = function(showObj, showName) {
  const arrayOfGenres = Object.keys(showObj); // puts the keys of the object in an array
  // console.log(arrayOfGenres);
  // const arrayOfShowNames = Object.values(showObj);
  // const reversedObj = {};

  for (let genre of arrayOfGenres) {
    if (showObj[genre] === showName) return genre;
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);