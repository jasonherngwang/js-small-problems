/*
Problem
------------------------------------------
Write a function that takes an array of strings and returns an array of the
same string values, but with all vowels (a, e, i, o, u) removed.

Inputs: 1 array of strings
Outputs: 1 array of vowel-less strings

Rules/Requirements
- Return new array
- Remove upper and lower case vowels.

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
- For each string in the array:
  - Use a regex to replace vowels (case-insentitive) with an empty string.
*/

'use strict';

function removeVowels(strings) {
  return strings.map((string) => string.replace(/[aeiou]/gi, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]
