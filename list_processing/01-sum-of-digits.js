/*
Problem
------------------------------------------
Write a function that takes one argument, a positive integer, and returns the
sum of its digits. Do this without using for, while, or do...while loops -
instead, use a series of method calls to perform the sum.

Inputs: 1 number, a positive integer
Outputs: 1 number, the sum of the digits of the input number.

Rules/Requirements
- Cannot use `for`, `while`, `do..while` loops.
- Use method calls only.

Clarifying Questions
-

Examples, Test Cases
------------------------------------------
Input: 496
Output: 19
4 + 9 + 6 = 19

Data Structure, Algorithm
------------------------------------------

Algorithm
- Convert number into string
- Split string into array of digit characters (0-9)
- Reduce array to single number
  - Convert each digit character to number
  - Add to sum
- Return sum
*/
'use strict';

function sum(number) {
  return [...String(number)].reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45

function sum2(number) {
  let result = 0;
  while (number > 0) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return result;
}

console.log(sum2(23)); // 5
console.log(sum2(496)); // 19
console.log(sum2(123456789)); // 45
