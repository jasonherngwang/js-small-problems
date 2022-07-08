/*
Problem
------------------------------------------
Given a sorted array and a value, implement binary search.

Inputs: 1 array, 1 value to search for
Outputs: 1 integer: the index of the value (if found), -1 otherwise

Rules, Requirements, Definitions
"Binary Search"
  If the array is empty return -1.
  1. Find the middle index and value
  2. If target value is equal to middle value, return middle index
  3a. If target > middle, repeat Steps 1-2 using the second half of the array
      (elements after the middle element).
  3b. If target < middle, repeat Steps 1-2 with the first half
      (elements before the middle element).


Clarifying Questions
- Will array elements and target value be primitives that are not NaN? Yes.
  - No objects

Edge Cases
- Empty array => Return -1


Examples, Test Cases
------------------------------------------
Target value: 'Pizzeria'

Array:
['Apple Store', 'Bags Galore',
 'Bike Store',  'Donuts R Us',
 'Eat a Lot',   'Good Food',
 'Pasta Place', 'Pizzeria',
 'Tiki Lounge', 'Zooper']

Middle value: 'Good Food'
- 'Pizzeria' is greater than 'Good Food'

Second half of array:
['Pasta Place', 'Pizzeria',
 'Tiki Lounge', 'Zooper']

Middle value: 'Tiki Lounge'
- 'Pizzeria' is lesser than 'Good Food'

First half of array:
['Pasta Place', 'Pizzeria']

Middle value: 'Pizzeria'
- Match found
- Return index 7.

Data Structure
------------------------------------------
Array

Algorithm
------------------------------------------
- Initialize two pointers
  - `startIndex` to 0
  - `endIndex` to last index
- While startIndex <= endIndex
  - Find midIndex as ceiling of: startIndex + (endIndex - startIndex) / 2
    - For even number of elems, this is right-of-center
    - For odd, this is center.
  - If target equals value at midIndex, return midIndex
  - If target > value at midIndex, reassign startIndex to midIndex + 1
  - If target < value at midIndex, reassign endIndex to midIndex - 1
- Return -1 (no match)

Recursive Approach
- Base case: Empty array: return -1
- Find middle index and value
- If target === midValue, return midIndex
- If target > midValue, perform recursive call with array slice that is right of
  center.
    - Vice versa if target < midValue

*/

'use strict';

function binarySearch1(array, value) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let midIndex = Math.ceil(startIndex + (endIndex - startIndex) / 2);
    let midValue = array[midIndex];

    if (value === midValue) {
      return midIndex;
    } else if (value > midValue) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
  }

  return -1;
}

function binarySearch(array, value, offset = 0) {
  if (array.length === 0) return -1;

  let midIndex = Math.floor(array.length / 2);
  let midValue = array[midIndex];

  if (value === midValue) {
    return midIndex + offset;
  } else if (value > midValue) {
    return binarySearch(
      array.slice(midIndex + 1),
      value,
      offset + midIndex + 1
    );
  } else {
    return binarySearch(array.slice(0, midIndex), value, offset);
  }
}

console.log(binarySearch([1, 2, 3], 2)); // 1
console.log(binarySearch([1, 2, 3], 5)); // -1

const yellowPages = [
  'Apple Store',
  'Bags Galore',
  'Bike Store',
  'Donuts R Us',
  'Eat a Lot',
  'Good Food',
  'Pasta Place',
  'Pizzeria',
  'Tiki Lounge',
  'Zooper',
];
console.log(binarySearch(yellowPages, 'Pizzeria')); // 7
console.log(binarySearch(yellowPages, 'Apple Store')); // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1

console.log(
  binarySearch(
    ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'],
    'Peter'
  )
); // -1
console.log(
  binarySearch(
    ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'],
    'Tyler'
  )
); // 6
