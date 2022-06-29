var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local'; // This `var` variable is function scoped. Destroyed after function completes execution.
}

someFunction();
console.log(myVar); // This is global
