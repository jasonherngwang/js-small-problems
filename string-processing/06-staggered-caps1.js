/*
Problem
------------------------------------------
Convert a string to staggered capitalization scheme.
Starting with first, every other char is capitalized, and those in between are
lowercase.
Don't change non-alphabetic chars.
Non-alphabetic chars count as character positions.

Inputs: 1 string
Outputs: 1 string in staggered case

Rules/Requirements
-

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
Algorithm
- Iterate through string, keeping track of indices.
  - For even indices (0, 2, 4), convert to uppercase.
  - For odd, lowercase
- Split and merge character array
*/

'use strict';

function staggeredCase(string) {
  return [...string]
    .map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"
