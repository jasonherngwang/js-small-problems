function concat(...values) {
  result = [];
  values.forEach((value) => {
    const newValues = Array.isArray(value) ? value : [value];
    result.push(...newValues);
  });
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], "a", ["one", "two"])); // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ["three"], 4)); // [1, 2, "three", 4]

function concat2(...values) {
  return values.flat();
}
console.log(concat2([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat2([1, 2], "a", ["one", "two"])); // [1, 2, "a", "one", "two"]
console.log(concat2([1, 2], ["three"], 4)); // [1, 2, "three", 4]
