/*
Function declarations are hoisted above variable declarations
counter is reassigned from a function to the number 5
Output: The total value is 15
*/

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

/* 
Identifier `counter` is referenced before it is reassigned to 5.
Accessing it will log '[Function: counter]'. Converting it to a number will yield NaN.
Multiplying a string by a number (3) will yield NaN.
*/
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;


/* 
Same as #1 since `counter` is referenced after its reassignment.
*/
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/* 
Syntax error on line `function counter(counot)`
Function counter is hoisted to the top. Identifier for `counter` exists.
Cannot re-declare a variable using `let`.
Error occurs during top-to-bottom program scan, before any hoisting effect.
*/
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));