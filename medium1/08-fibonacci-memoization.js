/*
Problem
------------------------------------------
Write a recursive (w/ memoization) Fibonacci function.

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

function fibonacci(n, memo = { 1: 1, 2: 1 }) {
  if (!memo[n]) {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }
  return memo[n];
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050

function fibonacci2(n) {
  let memo = { 1: 1, 2: 1 };

  return (function privateFibonacci(n) {
    if (!memo[n]) {
      memo[n] = privateFibonacci(n - 1, memo) + privateFibonacci(n - 2, memo);
    }
    return memo[n];
  })(n);
}

console.log(fibonacci2(1)); // 1
console.log(fibonacci2(2)); // 1
console.log(fibonacci2(3)); // 2
console.log(fibonacci2(4)); // 3
console.log(fibonacci2(5)); // 5
console.log(fibonacci2(12)); // 144
console.log(fibonacci2(20)); // 6765
console.log(fibonacci2(50)); // 12586269025
console.log(fibonacci2(75)); // 2111485077978050
