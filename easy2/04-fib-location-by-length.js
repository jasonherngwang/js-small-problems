/* 
Find nth fib number with the number of specified digits

Algo
Generate Fib numbers in sequence, keeping track of nth number generated.
Check length of string version of number
*/

function findFibonacciIndexByLength(numDigits) {
  let index = 2n;
  let fib1 = 1n;
  let fib2 = 1n;
  while (String(fib2).length < numDigits) {
    [fib1, fib2] = [fib2, fib1 + fib2];
    index += 1n;
  }
  return index;
}
console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));
