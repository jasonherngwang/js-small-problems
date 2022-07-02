/*
Problem
------------------------------------------
Write a function that takes a string as an argument and returns that string
with every lowercase letter changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged.

Inputs: 1 string
Outputs: 1 string with swapped cases for letters

Rules/Requirements
- Leave non-letters alone

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
Algorithm
- Use regex to capture and replace characters
  - If character is lowercase, return uppercase form.
  - Else return lowercase form.
*/

'use strict';

function swapLetterCase(letter) {
  return /[a-z]/.test(letter) ? letter.toUpperCase() : letter.toLowerCase();
}

// console.log(swapLetterCase('a'));
// console.log(swapLetterCase('A'));

function swapCase(string) {
  return string.replace(/[a-z]/gi, (letter) => swapLetterCase(letter));
  // return string.replace(
  //   /([a-z])|([A-Z])/g,
  //   (_, lowerCapture, upperCapture) =>
  //     (lowerCapture?.toUpperCase() || '') + (upperCapture?.toLowerCase() || '')
  // );
}

console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"
