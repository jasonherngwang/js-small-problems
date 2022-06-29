function cleanUp(str) {
  return str.replace(/[^a-z]+/gi, " ");
}

console.log(cleanUp("---what's my +*& line?"));
