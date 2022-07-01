/*
Problem
------------------------------------------
Write a function that takes a string as an argument and returns that string
with the first character of every word capitalized and all subsequent
characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

Inputs: 1 string
Outputs: 1 string, with words capitalized

Rules/Requirements
-

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
Use regex to replace any sequence of non-whitespace characters with the
capitalized version of that word.
*/

'use strict';

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
// console.log(capitalize('dOgGo'));

function wordCap(string) {
  return string.replace(/\S+/g, (word) => capitalize(word));
}

console.log(wordCap('four score and seven')); // "Four Score And Seven"
console.log(wordCap('the javaScript language')); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
