const isPalindrome = (str) => {
  return str === [...str].reverse().join('');
}

const isPalindromicNumber = function(num) {
  let numStr = String(num).replace(/^0+/, '');
  return isPalindrome(numStr);
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(000078987));            // true
console.log(isPalindromicNumber(078987));            // true