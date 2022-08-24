const assertEqual = require('./assertEqual');

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
  const arrayOfGenres = Object.keys(showObj);

  for (let genre of arrayOfGenres) {
    if (showObj[genre] === showName) return genre;
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);