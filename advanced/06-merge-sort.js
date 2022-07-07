/*
Problem
------------------------------------------
Write an array merge sort function.


Inputs: 1 array
Outputs: The input array, sorted (a new array)

Rules, Requirements, Definitions
- "Merge sort": A recursive algorithm that breaks down an array's elements into
  nested subarrays, then combines them back together in sorted order
- Array elements will be all numbers or all strings

Clarifying Questions
-

Edge Cases
- Empty input array => Return []
- Duplicates => Appear next to each other in the output array
- Negatives, zeroes: Allowed.

Examples, Test Cases
------------------------------------------
Input: [6, 2, 7, 1, 4]
Break down the array:
[[6, 2, 7], [1, 4]]
[[[6, 2], [7]], [[1], [4]]]
[[[[6], [2]], [7]], [[1], [4]]]
Merge:
[[[2, 6], [7]], [[1], [4]]]
[[2, 6, 7], [1, 4]]
[1, 2, 4, 6, 7]

Data Structure
------------------------------------------
Arrays

Algorithm
------------------------------------------
- Base case: Array only has 1 element
  - Return the array itself.
- Partition the array into 2 subarrays
  - Find the middle index
  - For an even number of elements, the subarrays will have equal length.
  - For an odd number of elements, the first subarray will have 1 more element.
- Recursively call the mergeSort function on each of the two subarrays.
- Use the helper function `merge` to merge the two partitions.
*/

'use strict';

function merge(array1, array2) {
  let mergedArray = [];
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  
  while (copy1.length > 0 && copy2.length > 0) {
    mergedArray.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }
  
  return mergedArray.concat(copy1, copy2);
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let midIndex = Math.ceil(array.length / 2);
  let left = mergeSort(array.slice(0, midIndex));
  let right = mergeSort(array.slice(midIndex));
  return merge(left, right)
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]