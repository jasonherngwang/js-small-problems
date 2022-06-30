/*
Problem
------------------------------------------
Write a function that takes a string argument and returns a list of substrings
of that string. Each substring should begin with the first letter of the word,
and the list should be ordered from shortest to longest.

Inputs: 1 string
Outputs: 1 array of substrings

Rules/Requirements
- Substrings start from index 0
- Order substrings from shortest to longest

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
Algorithm
- Initialize empty result array
- Initialize empty result string
- Iterate over characters in string
  - Concat current char with result string
  - Append result string to array
- Return array
*/

'use strict';

function leadingSubstrings(string) {
  let substrings = [];
  let currentString = '';
  for (let char of string) {
    currentString += char;
    substrings.push(currentString);
  }
  return substrings;
}

console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
console.log(leadingSubstrings('a')); // ["a"]
console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// Using list processing functions
function leadingSubstrings2(string) {
  return [...Array(string.length).keys()].map((index) =>
    string.slice(0, index + 1)
  );
}
console.log(leadingSubstrings2('abc')); // ["a", "ab", "abc"]
console.log(leadingSubstrings2('a')); // ["a"]
console.log(leadingSubstrings2('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings3(string) {
  return [...string].map((_, index, chars) =>
    chars.slice(0, index + 1).join('')
  );
}
console.log(leadingSubstrings3('abc')); // ["a", "ab", "abc"]
console.log(leadingSubstrings3('a')); // ["a"]
console.log(leadingSubstrings3('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
