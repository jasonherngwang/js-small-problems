const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456'; // Update value of 'prop2' from '234' to '456'
myObject[prop2] = '678';   // Create new prop '456': '678'

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2);  // '456'


const myObj = {};
myObj[myFunc()] = 'hello, '; // Create new prop 'funcProp': 'hello, '

function myFunc() {         // Hoisted to the top
  return 'funcProp';
}

console.log(myObj);         // { funcProp: 'hello, ' }
myObj[myFunc()] = 'world!'; // Reassign prop
console.log(myObj);         // { funcProp: 'world!' }