// function pop(array) {
//   const poppedElement = array[array.length]; // should be array.length - 1
//   array.splice[array.length]; // Incorrect syntax; use splice(array.length - 1)

//   return poppedElement;
// }
function pop(array) {
  const poppedElement = array[array.length - 1];
  array.splice(array.length - 1);

  return poppedElement;
}

// function push(array, ...args) {
//   const length = args.length;

//   for (let i = 1; i < length; i += 1) {
//     // Start at index 0
//     array[i] = args[i]; // Insert at array[array.length]
//   }

//   return array.length;
// }

function push(array, ...args) {
  const length = args.length;

  for (let i = 0; i < length; i += 1) {
    array[array.length] = args[i];
  }

  return array.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1)); // 3
console.log(array1); // [1, 2]
console.log(pop([])); // undefined
console.log(pop([1, 2, ["a", "b", "c"]])); // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6)); // 6
console.log(array2); // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ["a", "b"])); // 3
console.log(push([], 1)); // 1
console.log(push([])); // 0
