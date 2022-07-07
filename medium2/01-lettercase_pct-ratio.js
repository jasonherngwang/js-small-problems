/*
Problem
------------------------------------------
Write a function that takes a string and returns an object containing the
following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Inputs: 1 string
- At least one character
Outputs: 1 object with 3 entries, the percentages of lowercase, uppercase, and
neither
- Percentages are strings, truncated to 2 decimal places

Rules, Requirements, Definitions
- Lowercase is a-z
- Uppercase is A-Z
- Neither is all other characters, including numbers, spaces, punctuation, etc.


Clarifying Questions
-


Examples, Test Cases, Edge Cases
------------------------------------------
'abCdef 123'
Length: 10
Uppercase: C (1 => 10%)
Lowercase: a, b, d, e, f (5 => 50%)
Neither: ' ', 1, 2, 3 (4 => 40%)

Data Structure
------------------------------------------
Keep input as string so we can use regex.
Use an object to store result.

Algorithm
------------------------------------------
- Count the string length.
- Count the uppercase, lowercase, and neither characters.
- Divide each by the length and truncate to 2 decimals
- Create and return an object containing this data

*/

'use strict';

function letterPercentages(string) {
  let numChars = string.length;
  let lowercaseCount = string.match(/[a-z]/g)?.length || 0;
  let uppercaseCount = string.match(/[A-Z]/g)?.length || 0;
  let neitherCount = numChars - lowercaseCount - uppercaseCount;
  return {
    lowercase: ((lowercaseCount / numChars) * 100).toFixed(2),
    uppercase: ((uppercaseCount / numChars) * 100).toFixed(2),
    neither: ((neitherCount / numChars) * 100).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('a'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

console.log(letterPercentages('A'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }
