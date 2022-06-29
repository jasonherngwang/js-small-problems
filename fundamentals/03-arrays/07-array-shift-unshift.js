// function shift(arr) {
//   if (arr.length === 0) return undefined;

//   const first = arr[0];
//   for (let index = 0; index < arr.length - 1; index += 1) {
//     arr[index] = arr[index + 1];
//   }
//   arr.length = arr.length - 1;
//   return first;
// }

function shift(arr) {
  let result;

  if (arr.length > 0) {
    result = arr.splice(0, 1).pop();
  }

  return result;
}

/*
Algo: Unshift
For n new elements:
- Extend array length by n
- Shift existing elements to the right, by n indices
- Iterate over array of new elements, inserting into existing array at the same indices as they are in their current array.
- Return array length
*/

// function unshift(arr, ...values) {
//   const numValues = values.length;
//   arr.length += numValues;
//   for (let index = arr.length - 1; index >= numValues; index -= 1) {
//     arr[index] = arr[index - numValues];
//   }
//   values.forEach((elem, index) => {
//     arr[index] = elem;
//   });
//   return arr.length;
// }

function unshift(arr, ...values) {
  for (let i = 0; i < values.length; i += 1) {
    arr.splice(i, 0, values[i]);
  }

  return arr.length;
}

console.log(shift([1, 2, 3])); // 1
console.log(shift([])); // undefined
console.log(shift([[1, 2, 3], 4, 5])); // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6)); // 5
console.log(unshift([1, 2, 3])); // 3
console.log(unshift([4, 5], [1, 2, 3])); // 3

const testArray = [1, 2, 3];
console.log(shift(testArray)); // 1
console.log(testArray); // [2, 3]
console.log(unshift(testArray, 5)); // 3
console.log(testArray); // [5, 2, 3]
