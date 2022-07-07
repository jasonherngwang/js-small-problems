/*
Problem
------------------------------------------
Write a procedural Fibonacci function

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
The first (n = 1) Fibonacci number is 1.
The second (n = 2) Fibonacci number is 1.


*/

'use strict';

function fibonacci(n) {
  if (n <= 2) return 1;

  let a = 1;
  let b = 1;
  for (let counter = 3; counter <= n; counter += 1) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
