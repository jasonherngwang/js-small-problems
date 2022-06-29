/* 
Strict equality operator compares whether 2 objects are the same object, not whether their properties or value are the same.
*/

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };
const anotherPerson = person;

console.log(person === otherPerson);    // false -- expected: true
console.log(person === anotherPerson);    // true

function objEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  // Only works for primitives, with no nesting
  return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
}

console.log(objEqual(person, otherPerson));