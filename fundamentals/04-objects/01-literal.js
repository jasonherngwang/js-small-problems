const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]); // OK. 1 is converted to string '1'.
// console.log(myObject[a]); // ReferenceError. `a` references an undeclared variable, not the string 'a'.
console.log(myObject.a);  // OK