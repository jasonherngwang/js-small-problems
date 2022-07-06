/*
Problem
------------------------------------------
Write a function that rotates an array by moving the first element to the end
of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

Inputs: 1 array
- May contain mixtures of any data type: numbers, strings, objects, arrays
Outputs: 1 new array, rotated

Rules, Requirements, Definitions
- "Rotate" means: Moving first element to end.
- Cannot modify original array; must return new array.

Input Validation
- Input not array data type: Return `undefined`
- Input is empty array []: Return []

Clarifying Questions
- Handle sparse arrays? Yes.


Examples, Test Cases, Edge Cases
------------------------------------------


Data Structure
------------------------------------------
Continue to use arrays

Algorithm
------------------------------------------
Guard clauses
- Check for missing argument, and return `undefined`
- Check for non-array data type, and return `undefined`

Main function
- Create new array.
- Slice elements from the 2nd element (index 1) to the end of the original
  array, and copy those into the new array.
- Select the first element from the original array, and copy it into the new
  array.
- Return the new array.

*/

'use strict';

function rotateArray(array) {
  // No need to write `return undefined`; it will return `undefined` by default.
  if (arguments.length === 0 || !Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  // Using bracket notation (array[0]) or spreadj [...array] will convert
  // missing elements into `undefined`. Must use slice().
  return array.slice(1).concat(array.slice(0, 1));
}

// Happy paths
console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c'])); // ["b", "c", "a"]
console.log(rotateArray(['a'])); // ["a"]
console.log(rotateArray([1, 'a', 3, 'c'])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// sparse arrays
console.log(rotateArray([,])); // [<1 empty item>]
console.log(rotateArray([, ,])); // [<2 empty items>]
console.log(rotateArray([1, , , , 5])); // [<3 empty items>, 5, 1]

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]
