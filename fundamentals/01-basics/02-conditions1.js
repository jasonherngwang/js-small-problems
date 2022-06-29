const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {            // Boolean(true) evaluates to true
  console.log('Hello');     // Hello
}

// myString is a truthy value; evaluates to true
// !myString evaluates to false
// Boolean(false) evaluates to false
if (!myString) {
  console.log('World');     // Nothing
}

// [] is a truthy value. !![] evaluates to true.
if (!!myArray) {
  console.log('World');     // World
}

// '' is a falsey value. Logical operator proceeds to evaluate 2nd operand.
// [] is a truthy value. Operator returns []
// Boolean([]) evaluates to true
if (myOtherString || myArray) {
  console.log('!');                 // !
}