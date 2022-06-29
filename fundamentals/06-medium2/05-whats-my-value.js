const array = ['Apples', 'Peaches', 'Grapes'];

// Key is not a non-negative integer. This will create a new property with key '3.4', value 'Oranges'.
array[3.4] = 'Oranges';
console.log(array.length); // 3 (doesn't consider non-elements)
console.log(Object.keys(array).length); // 4 (includes all keys)

array[-2] = 'Watermelon'; // Creates another non-element property
console.log(array.length); // still 3
console.log(Object.keys(array).length); // 5