const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + actual + ' !== ' + expected);
  }
};

const countLetters = function(letterCount) {
  const result = {};
  for (let letter of letterCount) {
    if (letter !== " ") {
      result[letter] = !result[letter] ? 1 : result[letter] + 1;
    }
  }

  return result;
};

const letters = countLetters("Lighthouse Labs");
console.log(letters);