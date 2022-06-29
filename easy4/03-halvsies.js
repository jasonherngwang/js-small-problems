/*
Algo
- Find midpoint: array length / 2; use Math.ceil
  - Even number of elems: This will be right-of-center
  - Odd number of elems: This will be 1 right of center
  - Plan to use slice(), so we do not subtract 1.
- Create 2 new arrays
- Copy first and second halves out to those new arrays.
- Enclose both array as elements inside a new array.
*/

function halvsies(array) {
  const middleIndex = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);
  return [firstHalf, secondHalf];
}
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]