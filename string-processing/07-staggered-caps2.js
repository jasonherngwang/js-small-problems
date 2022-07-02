/*
Problem
------------------------------------------
Modify the function from the previous exercise so that it ignores non-alphabetic
characters when determining whether a letter should be upper or lower case.
Non-alphabetic characters should still be included in the output string, but
should not be counted when determining the appropriate case.

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
- Initialize a counter variable to number 0
- Initialize empty result string
- Iterate over chars in string
  - If char is a letter
    - For even counter values (0, 2, 4), convert to uppercase.
    - For odd, convert to lowercase
    - Increment counter
  - Else leave alone
- Join chars into single string
*/

'use strict';

function staggeredCase(string) {
  let counter = 0;
  let result = '';
  for (let char of string) {
    if (/[a-z]/i.test(char)) {
      result += counter % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      counter += 1;
    } else {
      result += char;
    }
  }
  return result;
}

console.log(staggeredCase('I Love Launch School!')); // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS')); // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers')); // "IgNoRe 77 ThE 444 nUmBeRs"
