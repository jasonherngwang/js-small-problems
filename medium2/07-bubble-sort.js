/*
Problem
------------------------------------------
Implement array bubble sort (mutating).

Inputs: An array of numbers
- At least 2 elements
Outputs: No output. Side effect is the original array sorted in-place.

Rules, Requirements, Definitions
"Bubble sort": Make multiple passes through an array, with two pointers at
consecutive elements. If e1 > e2, swap them.
- If a pass completes without a swap, sorting is complete.


Clarifying Questions
-

Edge Cases
- All numbers are the same: No swaps performed. Sorting completes after first
  pass
- Already sorted: No swaps performed. Sorting completes after first pass.
- Descending order: The worst scenario. Requires swaps on every pass.


Examples, Test Cases
------------------------------------------


Data Structure
------------------------------------------
Mutate the array in-place

Algorithm
------------------------------------------
- Initialize `stopIndex` to the last element's index.
- Declare `lastStopIndex`
- While loop
  - Initialize `swapped` to `false`
  - Iterate from 1 to stopIndex
    - If num1 > num2
      - Reassign lastSwap to index2
      - Swap the values.
      - Set `swapped` to true
  - Reassign lastIndex to lastSwap.
  - If no swap was performed, exit loop.
*/

'use strict';

function swapElements(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function bubbleSort(array) {
  let stopIndex = array.length - 1;
  let lastSwapIndex;

  while (true) {
    let swapOccurred = false;

    for (let i = 0; i < stopIndex; i += 1) {
      if (array[i] > array[i + 1]) {
        lastSwapIndex = i;
        swapElements(array, i, i + 1);
        swapOccurred = true;
      }
    }
    stopIndex = lastSwapIndex;

    if (!swapOccurred) break;
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
