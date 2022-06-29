logValue(); // Hello, world!

function logValue() { // This function is hoisted to the top of global scope.
  console.log('Hello, world!');
}


// Further Exploration
var logValue2 = 'foo';

function logValue2() {
  console.log('Hello, world!');
}

console.log(typeof logValue2); // 'string'

// Equivalent code
// function logValue2() {
//   console.log('Hello, world!');
// }

// var logValue2;           // Redundant; no effect.

// logValue2 = 'foo';

// console.log(typeof logValue2);