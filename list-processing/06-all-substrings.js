/*
Problem
------------------------------------------
Find all substrings, ordered by starting index (ascending) and
length (ascending)


Inputs: 1 string
Outputs: Array of substrings

Rules/Requirements
-

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
Algorithm: O(N^2)
- Initialize result array
- Iterate from 0 to end index
  - Nested iteration from current index + 1 to end index + 1
    - Slice string from current index + 1 to end index + 1.
    - Append substring to result array.
- Return result array
*/

'use strict';

// Nested iteration
function substrings(string) {
  let substrings = [];
  for (let startIdx = 0; startIdx < string.length; startIdx += 1) {
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx += 1) {
      substrings.push(string.slice(startIdx, endIdx));
    }
  }
  return substrings;
}

// console.log(substrings(''));
// console.log(substrings('a'));
// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

module.exports = { substrings };
