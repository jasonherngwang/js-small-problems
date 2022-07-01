/*
Problem
------------------------------------------
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array containing the products of all combinations of
number pairs that exist between the two arrays. The returned array should be
sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Inputs: 2 arrays of numbers
Outputs: 1 array of numbers, the products of all possible combinations

Rules/Requirements
- Sorted in ascending order
- Duplicates allowed
- Arrays will contain integers (pos, neg, 0)
- Neither array will be empty
- Return new array; no mutations

Clarifying Questions
-

Examples, Test Cases
------------------------------------------
Input: [2, 4], [4, 3, 1, 2]
Output: [2, 4, 4, 6, 8, 8, 12, 16]

Data Structure, Algorithm
------------------------------------------
Algorithm O(N*M + (N+M) * log(N+M))
- Initialize result array
- Iterate over first array
  - Iterate over second array
    - Calculate product and append to result array.
- Sort result array by number value
- Return result array
*/

'use strict';

const multiplyAllPairs = (arr1, arr2) => {
  let result = [];

  arr1.forEach((num1) => {
    arr2.forEach((num2) => {
      result.push(num1 * num2);
    });
  });

  return result.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16]

// Using map
const multiplyAllPairs2 = (arr1, arr2) => {
  return arr1
    .flatMap((num1) => arr2.map((num2) => num1 * num2))
    .sort((a, b) => a - b);
};
console.log(multiplyAllPairs2([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
