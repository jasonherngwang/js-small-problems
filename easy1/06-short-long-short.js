const shortLongShort = (str1, str2) => {
  if (str1.length > str2.length) [str1, str2] = [str2, str1];
  return str1 + str2 + str1;
};
console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
