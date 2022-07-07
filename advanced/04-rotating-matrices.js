/*
Problem
------------------------------------------
Write a function to rotate an MxN matrix clockwise by 90 degrees.

Inputs: 1 nested array representing a matrix
Outputs: 1 new nested array, the rotated input array

Rules, Requirements, Definitions
- An MxN array is rotated by 90 deg to an NxM array


Clarifying Questions
-

Edge Cases
-


Examples, Test Cases
------------------------------------------
M = 2, N = 3

3  4  1
9  7  5

Rotated:
9  3
7  4
5  1

1,1 => 1,2
1,2 => 2,2
1,3 => 3,2
2,1 => 1,1
2,2 => 2,1
2,3 => 3,1

Current col => Future Row
Current row => Col (N - current row)

Data Structure
------------------------------------------
Arrays

Algorithm
------------------------------------------
Similar to matrix transpose, but horizontally mirrored.

Iterate over columns, extracting each column into a horizontal row. Order them
by last row first.
- Create an empty result array.
- Iterate from 0 to col count - 1 (col-by-col)
  - Create a new array to hold the elements for the new row.
  - Iterate from 0 to row count - 1 (row-by-row)
    - Unshift the element at matrix[row][col] to the new row array.
      - This step is the difference between rotation and transpose.
  - Push the new row onto the result array.
- Return result array.
*/

'use strict';

function rotate90(matrix) {
  let result = [];
  for (let col = 0; col < matrix[0].length; col += 1) {
    let newRow = [];
    for (let row = 0; row < matrix.length; row += 1) {
      newRow.unshift(matrix[row][col]);
    }
    result.push(newRow);
  }
  return result;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]