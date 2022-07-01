/*
Problem
------------------------------------------
Write a function to determine whether an item is in available.

Inputs:
Outputs:

Rules/Requirements
- Available: Total movement IN > Total movement OUT

Clarifying Questions
-

Examples, Test Cases
------------------------------------------


Data Structure, Algorithm
------------------------------------------
For a given id, check if total quantity IN is greater than total OUT.
- Filter by key 'movement'
- Sum up quantity
- Compare quantities

*/

'use strict';

const { transactionsFor } = require('./09-inventory-transactions');

function isItemAvailable(id, transactions) {
  let transactionsIn = transactionsFor(id, transactions).filter(
    ({ movement }) => movement === 'in'
  );
  let quantityIn = transactionsIn.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );
  let transactionsOut = transactionsFor(id, transactions).filter(
    ({ movement }) => movement === 'out'
  );
  let quantityOut = transactionsOut.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );
  return quantityIn > quantityOut;
}
const transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
console.log(isItemAvailable(888, transactions)); // false

function isItemAvailable2(id, transactions) {
  const quantity = transactionsFor(id, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === 'in') {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  );
  return quantity > 0;
}

console.log(isItemAvailable2(101, transactions)); // false
console.log(isItemAvailable2(105, transactions)); // true
console.log(isItemAvailable2(888, transactions)); // false
