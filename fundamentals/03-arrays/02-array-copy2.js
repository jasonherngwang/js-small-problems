let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray;

// Method 1: Element-by-element copy. Creates a new primitive on each iteration.
// const myOtherArray = [];
// for (let index = 0; index < myArray.length; index += 1) {
//   myOtherArray.push(myArray[index]);
// }
// Method 2: Using Array.prototype.slice to make a shallow copy
// const myOtherArray = myArray.slice();

// Method 3: Spread Operator
const myOtherArray = [...myArray];

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
