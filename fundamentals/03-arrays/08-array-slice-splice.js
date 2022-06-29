function slice(array, begin, end) {
  begin = Math.min(begin, array.length);
  end = Math.min(end, array.length);
  if (begin > end) return [];

  result = [];
  for (let index = begin; index < end; index += 1) {
    result.push(array[index]);
  }
  return result;
}

console.log(slice([1, 2, 3], 1, 2)); // [2]
console.log(slice([1, 2, 3], 2, 0)); // []
console.log(slice([1, 2, 3], 5, 1)); // []
console.log(slice([1, 2, 3], 0, 5)); // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3)); // [2, 3]
console.log(arr1); // [1, 2, 3]

/*
Algo
- Shrink/delete
  - Initialize array to hold deleted elements
  - Iterate from index `start` to (start + deleteCount - 1)
    - Shift elements to left, overwriting the elements to be deleted
  - Shrink the array length to (length - deleteCount)

- Expand/insert
  - Expand the array length by the number of new elements
  - Shift existing elements to the right, by the number of new elements
  - Iterate over the new element array.
    - Update the values at the indices, from `start` to (start + num elements - 1)
*/
function splice(array, start, deleteCount, ...elements) {
  start = Math.min(start, array.length);
  deleteCount = Math.min(deleteCount, array.length - start);

  const arrayCopy = array.slice();
  const numElements = elements.length;
  const finalLength = array.length - deleteCount + numElements;
  array.length = finalLength;

  for (let i = 0; i < numElements; i += 1) {
    array[start + i] = elements[i];
  }

  arrayCopy.slice(start + deleteCount).forEach((elem, i) => {
    array[start + numElements + i] = elem;
  });

  return arrayCopy.slice(start, start + deleteCount);
}

console.log(splice([1, 2, 3], 1, 2)); // [2, 3]
console.log(splice([1, 2, 3], 1, 3)); // [2, 3]
console.log(splice([1, 2, 3], 1, 0)); // []
console.log(splice([1, 2, 3], 0, 1)); // [1]
console.log(splice([1, 2, 3], 1, 0, "a")); // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, "two")); // [2]
console.log(arr2); // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, "two", "three")); // [2, 3]
console.log(arr3); // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0)); // []
console.log(splice(arr4, 1, 0, "a")); // []
console.log(arr4); // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, "a")); // []
console.log(arr5); // ["a", 1, 2, 3]

/* 
Algo: Deconstruct and reconstruct
- Create 3 segments (arrays) containing:
  1. Elements from before the splice happens
  2. New elements to splice in
  3. Elements after the deleted ones
- Overwrite the original array, index-by-index, with the 3 segments.
  - Or delete all elements and build it back up
*/
const splice2 = function splice2(array, start, deleteCount, ...elements) {
  start = Math.min(start, array.length);
  deleteCount = Math.min(deleteCount, array.length - start);

  const firstSegment = array.slice(0, start);
  const lastSegment = array.slice(start + deleteCount);
  const deletedSegment = array.slice(start, start + deleteCount);

  array.length = 0;
  array.push(...firstSegment, ...elements, ...lastSegment);

  return deletedSegment;
};
