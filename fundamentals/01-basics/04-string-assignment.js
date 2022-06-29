let name = "Bob";
const saveName = name;
name = "Alice"; // Reassign name; saveName still references 'Bob'
console.log(name, saveName); // Alice Bob

const name2 = "Bob";
const saveName2 = name2;
name2.toUpperCase(); // Non-mutating. Operations on primitives return new primitives.
console.log(name2, saveName2); // Bob Bob

// Autoboxing: When calling a method (e.g. toUpperCase()) on a primitive, JS wraps the primitive in its associated object (e.g. String for strings) and calls the object's instance method. The wrapper object is discarded after the method call.
