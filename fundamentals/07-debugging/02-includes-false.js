function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    // Use strict equality. For 0 == false, booleans are converted to numbers (1 or 0)
    // if (element == false) {
    if (element === false) {
      return true;
    }
  }

  return false;
}
// returns:
console.log(includesFalse([8, null, "abc", true, "launch", 11, false])); // true
console.log(includesFalse(["programming", undefined, 37, 64, true, "false"])); // false
console.log(includesFalse([9422, "lambda", true, 0, "54", null])); // true
