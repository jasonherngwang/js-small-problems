/*
Problem
------------------------------------------
Write a function that takes a string argument and returns true if all of the
alphabetic characters inside the string are uppercase; otherwise, return false.
Ignore characters that are not alphabetic.

Inputs: 1 string
Outputs: 1 boolean

Rules/Requirements
- Letters don't have to be contiguous.
- There doesn't have to be any letters in the string.
- Empty string returns true

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
Algorithm
- Compare string to the uppercase version of itself.

Regex: Check if any lowercase letters a-z are present in the string.
*/

'use strict';

function isUppercase(string) {
  // return string === string.toUpperCase();
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t')); // false
console.log(isUppercase('T')); // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE!')); // true
console.log(isUppercase('')); // true
