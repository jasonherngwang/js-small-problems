/*
Problem
------------------------------------------
Write a function that takes an array of numbers and returns the sum of the sums
of each leading subsequence in that array. Examine the examples to see what we
mean. You may assume that the array always contains at least one number.

Inputs: 1 array of numbers
Outputs: 1 number, the sum

Rules/Requirements
- Array will have at least 1 number
- Subsequence spans index 0 to the current index

Clarifying Questions
-

Examples, Test Cases
------------------------------------------
Input: [3, 5, 2]
Output: (3) + (3 + 5) + (3 + 5 + 2) --> 21

Data Structure, Algorithm
------------------------------------------
Algorithm
- Initialize final sum
- Initialize current sum
- Iterate over array elements
  - Add current number to current sum
  - Add current sum to final sum
- Return final sum
*/

'use strict';

const sumOfSums = (array) => {
  let finalSum = 0;
  let currentSum = 0;
  array.forEach((number) => {
    currentSum += number;
    finalSum += currentSum;
  });
  return finalSum;
};

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
