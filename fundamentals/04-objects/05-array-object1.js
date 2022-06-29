const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);   // 'a'
console.log(myArray[-1]);  // undefined (negative indices not supported with bracket notation)

myArray[-1] = 'd';         // Create non-element property with name '-1' and value 'd'
myArray['e'] = 5;          // Create another non-element property
myArray[3] = 'f';          // Create element with array index '3' and value 'f'

console.log(myArray[-1]);  // -1 is converted to string. Outputs 'd'
console.log(myArray['e']); // 5
console.log(myArray);      // { 'a', 'b', 'c', 'f', '-1': 'd', e: 5 }
                           // Array indices are not displayed. Single quotes not displayed for names.