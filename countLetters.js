const assertEqual = require('./assertEqual');

const countLetters = letterCount => {
  const result = {};
  for (let letter of letterCount) {
    if (letter !== ' ') {
      result[letter] = !result[letter] ? 1 : result[letter] + 1;
    }
  }
  return result;
};

// const countLetters = function(letterCount) {
//   const result = {};
//   for (let letter of letterCount) {
//     if (letter !== " ") {
//       result[letter] = !result[letter] ? 1 : result[letter] + 1;
//     }
//   }

//   return result;
// };
