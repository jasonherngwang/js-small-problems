/*
Problem
------------------------------------------
Write a function that transposes a 3x3 matrix.
A 3x3 matrix is represented by a nested (2-D) array with 3 subarrays.
Each subarray has 3 elements.

Inputs: 1 nested 3x3 array
Outputs: 1 new array, the transpose of the input

Rules, Requirements, Definitions
- "Transpose": Exchange rows and columns of a matrix
  - E.g. element at row 2, col 3 becomes row 3, col 2

Clarifying Questions
-

Edge Cases
-


Examples, Test Cases
------------------------------------------
Input:
[1, 5, 8]
[4, 7, 2]
[3, 9, 6]
Output:
[1, 4, 3]
[5, 7, 9]
[8, 2, 6]

row: i, col: j
e_i,j => e_j,i

Data Structure
------------------------------------------
Arrays

Algorithm
------------------------------------------
Approach 1: Nested Iteration
- Initialize empty result array.
- Iterate from 0 to col count - 1.
  - Initialize empty array for the new row.
  - Iterate from 0 to row count - 1.
    - Append the element at row, col to the new row array.
  - Append the new row array to the result array.
  
Approach 2: Array Transformation
M rows and N cols -> N rows and M cols
- Transform an array containing the numbers 0 to cols - 1 (`colIndex`).
  - Create an array containing all element in that col, e.g. all the elements 
    in col 0. Steps:
    - Transform an array containing the numbers 0 to rows - 1 (`rowIndex`).
    - Retrieve the element at matrix[rowIndex][colIndex].
    - Flatten this transformed array.

*/

'use strict';

function transpose(matrix) {
  let result = [];
  for (let col = 0; col < matrix[0].length; col += 1) {
    let newRow = [];
    for (let row = 0; row < matrix.length; row += 1) {
      newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }
  return result;
}
// For a matrix with M rows and N columns
function transpose2(matrix) {
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  return [...Array(numCols).keys()].map(colIndex => {
    return [...Array(numRows).keys()].flatMap(rowIndex => matrix[rowIndex][colIndex]);
  })
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]