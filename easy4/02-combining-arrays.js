/*
Algo
- Initialize a result array
- Initialize empty object to track elements already present in the result array.
- Iterate through all arrays.
- If the element is not a key of the object, insert it into the result array.
  - Also create a property in the object. Key: element, Value: 1
- Return the result array.
*/
function union(...arrays) {
  let existingElements = {};
  let result = [];
  
  for (let elem of arrays.flat()) {
    // Skip duplicates
    if (existingElements[elem]) continue;
    // Keep track of elements we are adding to the result array.
    existingElements[elem] = 42;
    result.push(elem);
  }
  
  return result;
}
console.log(union([1, 3, 5], [3, 6, 9]));
// console.log(union([], []));
// console.log(union([1, 3, 5], [3, 6, 9], [2, 9, 11, 20]));
// console.log(union([1, '', undefined, null], [3, '', undefined, null]));