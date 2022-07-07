/*
Problem
------------------------------------------
Write a function that returns the next featured number greater than the input
integer.

"Featured Number":
- Odd
- Multiple of 7
- All digits occur once each
- The largest possible featured number is 9876543201.

Inputs: 1 integer
Outputs: 1 integer, a featured number, greater than the input integer

Rules, Requirements, Definitions
- If there is no such featured number, display an error message.


Clarifying Questions
- No missing argument, non-integer data type
- Can be zero or negative

Edge Cases
- 9876543201 or greater => Error message


Examples, Test Cases
------------------------------------------
Input: 21
- Next multiples of 7: 28 (not odd), 25

Input: 12
- Next multiples of 7: 14 (not odd), 21

Data Structure
------------------------------------------
Working with numbers

Algorithm
------------------------------------------
- Find the next greater odd number that is also a multiple of 7
- While number < 9876543201
  - If the digits each appear only once, return the number.
  - Increment by 14
- Display error message.

Helper method: Unique digits
- Create empty object
- Convert input number to string
- If first character is '-', remove it.
- Split into array of digit strings.
- Iterate over array
  - If string is not key in object, create a property for it
  - If string is already a key, it is a duplicate. Return false.
- Return true.
*/

'use strict';

function uniqueDigits(num) {
  let digitsSeen = {};
  let digits = [...String(num)];
  if (digits[0] === '-') digits.shift();
  for (let index = 0; index < digits.length; index += 1) {
    if (!digitsSeen[digits[index]]) {
      digitsSeen[digits[index]] = true;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(uniqueDigits(0)); // true
// console.log(uniqueDigits(-0)); // true
// console.log(uniqueDigits(123)); // true
// console.log(uniqueDigits(133)); // false
// console.log(uniqueDigits(-123)); // true
// console.log(uniqueDigits(-133)); // false

function nextOddMultipleOf7(number) {
  let nextNum = Math.floor(number / 7) * 7 + 7;
  if (nextNum % 2 === 0) nextNum += 7;
  return nextNum;
}

function featured(number) {
  const MAX_FEATURED_NUM = 9876543201;
  let nextNum = nextOddMultipleOf7(number);
  while (nextNum <= MAX_FEATURED_NUM) {
    if (uniqueDigits(nextNum)) return nextNum;
    nextNum += 14;
  }
  console.log('There is no possible number that fulfills those requirements.');
}

console.log(featured(0)); // 7
console.log(featured(12)); // 21
console.log(featured(-12)); // -7
console.log(featured(20)); // 21
console.log(featured(-20)); // -7
console.log(featured(21)); // 35
console.log(featured(-21)); // -7
console.log(featured(-22)); // -21
console.log(featured(997)); // 1029
console.log(featured(-997)); // -987
console.log(featured(1029)); // 1043
console.log(featured(-1029)); // -987
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(-9876543500)); // -9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
