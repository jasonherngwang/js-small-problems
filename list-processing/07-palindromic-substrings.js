/*
Problem
------------------------------------------
Find all palindromic substrings.

Inputs: 1 string
Outputs: Array of palindromic substrings

Rules/Requirements
- Order by appearance in the input string
- Include duplicates
- Consider all characters
- Case-sensitive
- Single characters are not palindromes

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
- Use `substrings` method to generate an array of all possible substrings.
- Filter to palindromes only

Helper method: isPalindrome
- Length must be > 1 character
- Find reverse by splitting into array, reversing, joining
- Palindromes are equal to their reverse

*/

'use strict';

const { substrings } = require('./06-all-substrings');

function isPalindrome(string) {
  if (string.length <= 1) return false;
  const reversedString = [...string].reverse().join('');
  return string === reversedString;
}

console.log(isPalindrome('a')); // false (too short)
console.log(isPalindrome('abba')); // true
console.log(isPalindrome('abbc')); // false

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd')); // []
console.log(palindromes('madam')); // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
