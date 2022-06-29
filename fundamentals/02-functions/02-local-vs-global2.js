var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';  // Function scoped. Variable shadowing
  console.log(myVar);           // This is local
}

someFunction();