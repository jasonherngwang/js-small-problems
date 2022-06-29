function reverse(inputForReversal) {
  result = [];
  [...inputForReversal].forEach((elem) => result.unshift(elem));
  if (typeof inputForReversal === "string") return result.join("");
  return result;
}

console.log(reverse("Hello")); // "olleH"
console.log(reverse("a")); // "a"
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([])); // []

const array = [1, 2, 3];
console.log(reverse(array)); // [3, 2, 1]
console.log(array); // [1, 2, 3]
