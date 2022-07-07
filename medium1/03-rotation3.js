/*
Problem
------------------------------------------
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer.

Inputs: 1 number
Outputs: 1 number, the maximum rotation of the input number

Requirements (explicit, implicit)
- "Maximum rotation" means:
  - For a number with 6 digits, repeat these steps N-1 times
    - Fix in place the leftmost 0, 1, 2, ..., N-2 digits
    - Rotate the rightmost N, N-1, N-2, ..., 2 digits.
  - Remove leading zeroes
  - Convert string back to a number
  

Clarifying Questions
- Non-negative integer input? Yes
- Missing argument? No
- Data type not number? No
- Float? No
- Special values: undefined, null, NaN?

Examples, Test Cases
------------------------------------------
Input: 105
Fix leftmost 0 digits. Rotate 3 digits: 051
Fix leftmost 1 digit. Rotate 2 digits: 015
Remove leading 0: 15

Data Structure
------------------------------------------
Use the rotateRightmostDigits function, which converts the number to a string
and then back to a number.

Algorithm
------------------------------------------
- Iterate from N down to 2, decrementing by 1.
  - Reassign the local variable `number` to the return value of invoking the
    rotateRightmostDigits function, passing in `number` itself, and N.
- Return `number`.

*/
"use strict";

function rotateRightmostDigits(number, n) {
  if (arguments.length < 2) return;
  if (typeof number !== 'number' || typeof n !== 'number') return;
  if (Number.isNaN(number) || Number.isNaN(n)) return;
  if (number < 0 || n < 0) return;
  if (n === 0) return number;
  
  let digits = [...String(number)];
  digits = digits.concat(digits.splice(-n, 1));
  return Number(digits.join(''));
}

function maxRotation(number) {
  for (let n = String(number).length; n >= 2; n -= 1) {
    number = rotateRightmostDigits(number, n);
  }
  return number;
}


console.log(maxRotation(0));          // 0
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845