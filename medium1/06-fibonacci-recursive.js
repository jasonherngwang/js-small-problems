/*
Problem
------------------------------------------
Write a recursive Fibonacci function.

Inputs: 1 positive integer, the Nth Fibonacci number
Outputs: The Nth Fibonacci number

Rules, Requirements, Definitions
-


Clarifying Questions
-


Examples, Test Cases, Edge Cases
------------------------------------------


Data Structure
------------------------------------------


Algorithm
------------------------------------------
Base case:
- The first (n = 1) Fibonacci number is 1.
- The second (n = 2) Fibonacci number is 1.
Return the sum of two recursive calls:
fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)

*/

'use strict';

function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
