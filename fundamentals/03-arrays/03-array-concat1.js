function concat(array1, secondArgument) {
  result = array1.slice();
  if (Array.isArray(secondArgument)) {
    result.push(...secondArgument);
  } else {
    result.push(secondArgument);
  }
  return result;
}

// function concat(array, arg) {
//   return [...array, ...(Array.isArray(arg) ? arg : [arg])];
// }

concat([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3); // [1, 2, 3]
concat([2, 3], ["two", "three"]); // [2, 3, "two", "three"]
concat([2, 3], "four"); // [2, 3, "four"]

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray); // [2, 3, { a: 2, b: 3 }]
obj.a = "two";
console.log(newArray); // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3); // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = "three";
console.log(arr3); // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3; // or, `arr3[5]['b'] = 3;`
console.log(obj); // { a: "two", b: 3 }
