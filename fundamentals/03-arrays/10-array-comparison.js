function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) return false;
  }
  return true;
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  // Working copy of array2
  let array2Copy = array2.slice();
  for (let i = 0; i < array1.length; i += 1) {
    let index = array2Copy.indexOf(array1[i]);
    if (index >= 0) {
      // Delete element so it can't be counted again.
      array2Copy.splice(index, 1);
    } else {
      // If at any point an element cannot be found, the arrays aren't equal.
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // true
console.log(areArraysEqual(["a", "b", "c"], ["b", "c", "a"])); // true
console.log(areArraysEqual(["1", 2, 3], [1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1])); // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1])); // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2])); // false
console.log(areArraysEqual([1, 1, 1], [1, 1])); // false
console.log(areArraysEqual([1, 1], [1, 1])); // true
