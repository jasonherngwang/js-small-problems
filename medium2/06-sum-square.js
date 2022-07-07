/*
Problem
------------------------------------------
Write a function that computes the difference between the square of the sum of
the first n positive integers and the sum of the squares of the first n
positive integers.

Inputs: 1 integer, non-negative
Outputs: 1 integer, the difference between the squared sum and the sum of
squares

Rules, Requirements, Definitions
- "First n positive integers" means:
  - Starts at integer 1
  - Increments by 1


Clarifying Questions
- Missing args, non-number data type? No.
- Zero? Yes.
- Negative? Yes.

Edge Cases
-


Examples, Test Cases
------------------------------------------


Data Structure
------------------------------------------
Numbers only

Algorithm
------------------------------------------
- Initialize varibles `sum` and `sumSquares` to 0.
- Iterate from 1 to n:
  - Add n to sum.
  - Add n**2 to sumSquares.
- Return sum^2 - sumSquares.

*/

'use strict';

function sumSquareDifference(n) {
  let sum = 0;
  let sumSquares = 0;
  for (let counter = 1; counter <= n; counter += 1) {
    sum += counter;
    sumSquares += counter ** 2;
  }
  return sum ** 2 - sumSquares;
}

console.log(sumSquareDifference(0)); // 0
console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
