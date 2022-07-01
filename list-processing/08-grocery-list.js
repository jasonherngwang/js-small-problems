/*
Problem
------------------------------------------
Flatten a grocery list array

Inputs: Nested array. Subarray has 2 elements: item and quantity.
Outputs: Flat array with each item repeated as many times as its quantity

Rules/Requirements
- Preserve order

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
- Transform each element (subarray)
  - Create a holding array
  - For the number of times listed in the quantity, add the item to this
    holding array.
- Flatten and return the array
*/

'use strict';

function buyFruit(groceryList) {
  return groceryList.flatMap(([item, quantity]) => Array(quantity).fill(item));
}
console.log(
  buyFruit([
    ['apple', 3],
    ['orange', 1],
    ['banana', 2],
  ])
);
