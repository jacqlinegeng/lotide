const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertArraysEqual(result, ["Lighthouse", "Labs"]);