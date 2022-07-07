/*
Problem
------------------------------------------
Write a function that merges 2 sorted arrays into a new ordered array.

Inputs: 2 arrays, sorted
- Elements can be any data type (numbers, strings, other primitives, objects)
Outputs: 1 array, sorted

Rules, Requirements, Definitions
- Return new array
- Can't use sort methods
- Build result array one element at a time


Clarifying Questions
- How to handle NaN?
- Sort -0 before 0?
- Infinity and -Infinity?

Edge Cases
- Arrays can be empty
- No missing arguments


Examples, Test Cases
------------------------------------------


Data Structure
------------------------------------------
Arrays

Algorithm
------------------------------------------
Guard clause
- Check if all values in both arrays are either:
  1. All numbers and not NaN, or
  2. All strings
- If not, return `undefined`.

Steps
- Initialize empty result array
- Initialize two pointers index1 and index2 to 0, to track the current index of
  each of the two input arrays we are iterating over
- While loop:
  - If index1 is >= length of array1, append the rest of array2 to the result.
    - Do the same for index2.
  - Retrieve the values at both pointers.
  - If one value is greater, push that value onto the result array, and advance
    that pointer by 1.
- Return result array.
*/

'use strict';

function isSortableArray(array) {
  if (array.some(e => Number.isNaN(e))) return false;
  return array.every(e => typeof e === 'number') || array.every(e => typeof e === 'string');
}

function merge1(array1, array2) {
  if (!isSortableArray(array1) || !isSortableArray(array2)) return;
  
  let result = [];
  let index1 = 0;
  let index2 = 0;
  
  while (true) {
    if (index1 >= array1.length) return [...result, ...array2.slice(index2)];
    if (index2 >= array2.length) return [...result, ...array1.slice(index1)];
    
    let value1 = array1[index1];
    let value2 = array2[index2];
    
    if (value1 < value2) {
      result.push(value1);
      index1 += 1;
    } else if (value1 > value2) {
      result.push(value2);
      index2 += 1;
    } else {
      result.push(value1, value2);
      index1 += 1;
      index2 += 1;
    }
  }
  
  return result;
}

// LS Solution
function merge(array1, array2) {
  let mergedArray = [];
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  
  while (copy1.length > 0 && copy2.length > 0) {
    mergedArray.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }
  
  return mergedArray.concat(copy1, copy2);
}

// Numbers
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([0, 1, Infinity], [-Infinity, -0, 2]));         // [-Infinity, 0, -0, 1, 2, Infinity]

// Strings
console.log(merge(['a', 'g', 'z'], ['ab', 'h', 'y'])); // ['a', 'ab', 'g', 'h', 'y', 'z']

// Empty array
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([], []));                    // []

// Other data types
console.log(merge([1, NaN, undefined], [0, null, '']));         // undefined