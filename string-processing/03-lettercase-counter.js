/*
Problem
------------------------------------------
Count the uppercase, lowercase, and neither chars in a string.

Inputs: 1 string
Outputs: 1 object with counts

Rules/Requirements
- Empty input string allowed. Counts are all 0.

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
Algorithm
- Initialize counts object
- Iterate through input string
  - If uppercase, increment uppercase counter
  - If lowercase, increment lowercase counter
  - Else increment `neither` counter
- Return object
*/

'use strict';

function letterCaseCount(string) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 };
  return [...string].reduce((counts, char) => {
    if (/[a-z]/.test(char)) {
      counts.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
    return counts;
  }, counts);
}

// console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount2(string) {
  const matchCount = (pattern) => string.match(pattern)?.length || 0;

  return {
    lowercase: matchCount(/[a-z]/g),
    uppercase: matchCount(/[A-Z]/g),
    neither: matchCount(/[^a-z]/gi),
  };
}

console.log(letterCaseCount2('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount2('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount2('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount2('')); // { lowercase: 0, uppercase: 0, neither: 0 }
