var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local'; // Reassignment. Can access outer scope.
}

someFunction();
console.log(myVar); // This is local