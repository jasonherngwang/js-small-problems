var myVar = 'This is global';

function someFunction() {
  console.log(myVar);  // Can access outer scope.
}

someFunction();  // This is global.