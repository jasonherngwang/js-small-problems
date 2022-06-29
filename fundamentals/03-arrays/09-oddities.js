function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

// oddElements returns a NEW object
// === compares object identity, not value

oddities([2, 3, 4, 5, 6]) === [2, 4, 6]; // false
oddities(["abc", "def"]) === ["abc"]; // false
