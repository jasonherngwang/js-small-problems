function someFunction() {
  myVar = 'This is global'; // No declaration keyword. Binds myVar to global object.
}

someFunction();
console.log(myVar); // This is global.