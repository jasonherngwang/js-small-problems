// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

function swapName(name) {
  let nameComponents = name.split(' ');
  return nameComponents[nameComponents.length - 1] + 
         ', ' + 
         nameComponents.slice(0, nameComponents.length - 1).join(' ')
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Joe Dylan Bob Roberts'));    // "Roberts, Joe"
console.log(swapName('Joe Mark Roberts'));    // "Roberts, Joe"

function swapNameRegex(name) {
  return name.replace(/(.+)\s+(\S+)/, '$2, $1')
}

console.log(swapNameRegex('Joe Roberts'));    // "Roberts, Joe"
console.log(swapNameRegex('Joe Dylan Bob Roberts'));    // "Roberts, Joe"
console.log(swapNameRegex('Joe Mark Roberts'));    // "Roberts, Joe"
