let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray); // [1, 2, 3]
// The binding between a constant and its value is immutable, but the value itself remains mutable.
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2]; // reassignment
console.log(myArray); // [1, 2]
console.log(myOtherArray); // [1, 2, 3]
