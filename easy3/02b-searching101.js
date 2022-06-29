function isIncluded(arr, val) {
  return arr.some(elem => elem > val);
}

console.log(isIncluded([5, 20, 100], 25)); // true
console.log(isIncluded([5, 20, 100], 90)); // true
console.log(isIncluded([5, 20, 100], 2000)); // false